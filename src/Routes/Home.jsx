import React from 'react';
import { useState, useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {

  const [dentists, setDentists] = useState([])

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />

    fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            setDentists(data)
          }
        )
      }
    )
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">

        {
          dentists.map((dentist) => {
            return (             
                <Card containerData={dentist} key={dentist.matricula} />             
            )
          })
        }

      </div>
    </>
  );
};

export default Home;
