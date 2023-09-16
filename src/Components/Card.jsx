import React from "react";
import { Link } from 'react-router-dom';
import { useGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {

    const { addToFavorites, removeFromFavorites, state } = useGlobal();
  
    const isFavorite = state.favorites.includes(id);
  
    const addFav = () => {
      addToFavorites({id, name, username});
    }
  
    const removeFromFav = () => {
      removeFromFavorites(id);
    }

  return (
    <div className="card">
      <img src="../images/doctor.jpg" alt="Doctor" />
      <h2>{name}</h2>
      <p>{username}</p>
      {isFavorite ? (
        <button onClick={removeFromFav}>Remove from Fav</button>
      ) : (
        <button onClick={addFav} className="favButton">ADD FAV</button>
      )}
      {/* <button onClick={() => navigateToDetail(id)}>Ver Detalles</button> */}
      <Link to={`/dentist/${id}`}>Ver Detalles</Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

    </div>
  );
};

export default Card;
