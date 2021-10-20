import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Api from '../../api/api'

const List = () => {
  const [tarefas, setTarefas] = useState([]);
  
  useEffect(() => {
    getTarefas();
  }, []);
  
  const getTarefas = async () => {
    const response = await Api.fetchGetAll(); 
    const data = await response.json(); 
    setTarefas(data); 
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {
        tarefas.map((tarefas, index) => ( 
          <Card data={tarefas} key={index}/>
        ))
      }
    </div>
  )
}

export default List