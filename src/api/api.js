
const Api = {
    apiUrl: 'http://localhost:3500/tarefas',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
    fetchPost: (tarefas) => {
      return fetch(Api.apiUrl, {
        method: 'POST',
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(tarefas)
      })
    },
    fetchPut: (tarefa, id) => {
      return fetch(`${Api.apiUrl}/${id}`, {
        method: 'PUT',
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(tarefa)
      })
    },
    fetchDelete: (id) => {
      return fetch(`${Api.apiUrl}/${id}`, {
        method: 'DELETE'
      })
    }
  }
  
  export default Api;