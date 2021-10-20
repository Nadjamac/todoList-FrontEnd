import React from 'react'
import './cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const titulo = evento.target.titulo.value; 
    const prioridade = evento.target.prioridade.value;
    const descricao = evento.target.descricao.value;
    const status = evento.target.status.value;
    
    const tarefa = {
      titulo,
      descricao,
      prioridade,
      status
    }
    
    try {
      const response = await Api.fetchPost(tarefa)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo"/>
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="descricao" id="floatingdescricao" placeholder="Digite a Descricao"/>
                  <label htmlFor="floatingsalario">Prioridade</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="status" id="floatingInput" placeholder="Digite o status"/>
                  <label htmlFor="floatingInput">Status</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="prioridade" id="floatingprioridade" placeholder="Digite a Prioridade">
                    <option value="baixa">Baixa</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                  <label htmlFor="floatingstatus">Status</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro


