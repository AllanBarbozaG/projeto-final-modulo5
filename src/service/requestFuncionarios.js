export function GetFuncionario() {
  return fetch("http://localhost:3000/funcionario", {
    method: "GET",
    mode: "cors",
  }).then((response) => {
  
    return response.json();
  });
}

export function PostFuncionario() {

    let data = {

        nome: "José Marcos",
        data_admissao: "01/02/22",
    }

  return fetch("http://localhost:3000/funcionario", {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response =>
    response.json()
  )
}

export function PutFuncionario() {

    let data = {

        nome: "José Marcos Junior",
        data_admissao: "01/02/22"
    }

  return fetch(`http://localhost:3000/funcionario/1`, {
    method: "PUT",
    body: JSON.stringify(data),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}

export function DeleteFuncionario() { 
  return fetch(`http://localhost:3000/funcionario/1`, {
    method: "DELETE",
    mode: "cors",
  }).then((response) => {
    return response.json();
  })
}