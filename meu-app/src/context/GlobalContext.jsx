import React, { createContext, useReducer, useEffect } from "react";
import api from "../services/api";

const initialState = {
  itens: [],
  carregando: true,
  erro: null,
};

const actionTypes = {
  SET_ITENS: "SET_ITENS",
  ADD_ITEM: "ADD_ITEM",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, carregando: true, erro: null };

    case actionTypes.SET_ITENS:
      return { ...state, itens: action.payload, carregando: false };

    case actionTypes.ADD_ITEM:
      return { ...state, itens: [...state.itens, action.payload] };

    case actionTypes.SET_ERROR:
      return { ...state, erro: action.payload, carregando: false };

    default:
      return state;
  }
}

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function carregarItens() {
    dispatch({ type: actionTypes.SET_LOADING });
    try {
      const response = await api.get("/itens");
      dispatch({ type: actionTypes.SET_ITENS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.SET_ERROR, payload: error });
    }
  }

  async function adicionarItem(item) {
    try {
      const response = await api.post("/itens", item);
      dispatch({ type: actionTypes.ADD_ITEM, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.SET_ERROR, payload: error });
    }
  }

  useEffect(() => {
    carregarItens();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, adicionarItem, carregarItens }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
