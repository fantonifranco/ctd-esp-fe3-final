import { createContext, useContext, useReducer } from "react";

export const initialState = { theme: "light", favorites: JSON.parse(localStorage.getItem('favorites')) || [] }

export const ContextGlobal = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    case 'REMOVE_FROM_FAVORITES':
      const filteredFavorites = state.favorites.filter(id => id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
      case 'TOGGLE_THEME':
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        return { ...state, theme: newTheme };
      default:
        return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavorites = (id, name, username) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: id, name, username });
  }
  const removeFromFavorites = (id) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });
  }

  const valueProvider = { state, dispatch, addToFavorites, removeFromFavorites };

  return (
    <ContextGlobal.Provider value={valueProvider}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobal = () => {
  return useContext(ContextGlobal);
}
