import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
 
  const [tarefa, setTarefa] = useState({});

  
  useEffect(() => {
    getTarefaById();
  }, []);

  const getTarefaById = async () => {
    
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    
    setTarefa(result);
  };

  const handleFieldsChange = (event) => {
   
    const campos = { ...tarefa };
   
    campos[event.target.titulo] = event.target.value;

    setTarefa(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const tarefaObj = {...tarefa};
    try{
      const response = await Api.fetchPut(tarefaObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Edicao da Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={tarefa.titulo}
                    className="form-control"
                    name="titulo"
                    id="floatingInput"
                    placeholder="Digite o Titulo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    value={tarefa.Descricao}
                    className="form-control"
                    name="descricao"
                    id="floatingdescricao"
                    placeholder="Digite a Descricao"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingdescricao">Descricao</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={tarefa.status}
                    className="form-control"
                    name="descricao"
                    id="floatingInput"
                    placeholder="Digite a Status"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Status</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select value={tarefa.prioridade}
                    className="form-control"
                    name="prioridade"
                    id="floatingsenioridade"
                    value={tarefa.prioridade}
                    onChange={handleFieldsChange}
                    >
                    <option value="baixa">Baixa</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                  <label htmlFor="floatingprazo">Prazo</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;