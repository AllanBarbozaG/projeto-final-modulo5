export function GetRequest() {
  return fetch("http://localhost:3000/hospedes", {
    method: "GET",
    mode: "cors",
  }).then((response) => {
    return response.json();
  });
}

export function PostRequest(guestCpf, guestName, guestRoomNumber, guestPhoneNumber) {

  const newGuest = {
    "cpf": guestCpf,
    "nome": guestName,
    "numeroQuarto": guestRoomNumber,
    "telefone": guestPhoneNumber
  }

  return fetch("http://localhost:3000/hospedes", {
    method: "POST",
    body: JSON.stringify(newGuest),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response =>
    response.json()
  )
}

export function PutRequest(guestCpf, guestName, guestRoomNumber, guestPhoneNumber) {

  const newGuest = {
    "cpf": guestCpf,
    "nome": guestName,
    "numeroQuarto": Number(guestRoomNumber),
    "telefone": guestPhoneNumber
  }

  return fetch(`http://localhost:3000/hospedes/${guestCpf}`, {
    method: "PUT",
    body: JSON.stringify(newGuest),
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}

export function DeleteRequest(cpf) {

  return fetch(`http://localhost:3000/hospedes/46988780884`, {
    method: "DELETE",
    mode: "cors",
  }).then((response) => {
    return response.json();
  })
}