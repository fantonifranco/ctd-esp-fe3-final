import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setDoctor(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctor details:', error);
      });
  }, [id]);


  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Detail Dentist id </h1>
      <p>Nombre: {doctor.name}</p>
      <p>Email: {doctor.email}</p>
      <p>Telefono: {doctor.phone}</p>
      <p>Sitio Web: {doctor.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail;