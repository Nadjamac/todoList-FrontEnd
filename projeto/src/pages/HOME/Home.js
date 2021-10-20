import React from 'react';
import List from '../../structore/List/Lista';
import './Home.css';

const Home = () => {
  return (
    <div className="container home">
      <h1 className="text-center">Listagem de Tarefas</h1>
      <List/>
    </div>
  )
}

export default Home
