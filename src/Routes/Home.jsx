import React from 'react'
import Card from '../Components/Card'
import { useEffect, useReducer } from 'react';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const initialState = {
  dentists: [],
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload, loading: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

const Home = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }
  return (
    <div>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
          {state.dentists.map(dentist => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))}
      </div>
    </div>
  )
}

export default Home;