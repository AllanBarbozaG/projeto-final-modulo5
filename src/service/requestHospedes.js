export function GetRequest() {
  return fetch("http://localhost:3000/hospedes", {
    method: "GET",
    mode: "cors",
  }).then((response) => {
    return response.json();
  });
}

export function PostRequest() {

  let data = {
    "cpf": "99999999959",
    "nome": "Paçoquito da Silva",
    "numeroQuarto": 300,
    "telefone": "991237890"
  }

  return fetch("http://localhost:3000/hospedes", {
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

export function PutRequest() {

  let data = {
    "cpf": "99999999959",
    "nome": "Paçoquito da Silva Junior",
    "numeroQuarto": 350,
    "telefone": "991237822"
  }

  return fetch(`http://localhost:3000/hospedes/99999999959`, {
    method: "PUT",
    body: JSON.stringify(data),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}

export function DeleteRequest(cpf) {

  return fetch(`http://localhost:3000/hospedes/99999999959`, {
    method: "DELETE",
    mode: "cors",
  }).then((response) => {
    return response.json();
  })
}