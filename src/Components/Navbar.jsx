import React from 'react'
import { useGlobal } from './utils/global.context';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useGlobal();
  console.log(state.theme);
  console.log(state);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Favoritos</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Change theme</button>
    </nav>
  )
}

export default Navbar