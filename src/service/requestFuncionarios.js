export function GetFuncionario() {
  return fetch("http://localhost:3000/funcionario", {
    method: "GET",
    mode: "cors",
  }).then((response) => {
  
    return response.json();
  });
}

export function PostFuncionario(employeeName, admissionDate) {

    const newEmployee = {

        "nome": employeeName,
        "data_admissao": admissionDate,
    }

  return fetch("http://localhost:3000/funcionario", {
    method: "POST",
    body: JSON.stringify(newEmployee),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response =>
    response.json()
  )
}

export function PutFuncionario(employeeId, employeeName, admissionDate) {

    const newEmployee = {

        "nome": employeeName,
        "data_admissao": admissionDate
    }

  return fetch(`http://localhost:3000/funcionario/${employeeId}`, {
    method: "PUT",
    body: JSON.stringify(newEmployee),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}

export function DeleteFuncionario(employeeId) { 
  return fetch(`http://localhost:3000/funcionario/${employeeId}`, {
    method: "DELETE",
    mode: "cors",
  }).then((response) => {
    return response.json();
  })
}