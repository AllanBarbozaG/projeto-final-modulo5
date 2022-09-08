export function GetLimpezasRequest() {
    return fetch("http://localhost:3000/limpezas", {
        method: "GET",
        mode: "cors",
    }).then((response) => {
    
        return response.json();
    });
}

export function PostLimpezasRequest(roomNumber, isItClean, employeeId, cleanningDate) {

    const newCleanning = {
        "numeroQuarto": roomNumber,
        "controle": isItClean,
        "id_funcionario": employeeId,
        "dataEntrada": cleanningDate,
    }

    return fetch("http://localhost:3000/limpezas", {
    method: "POST",
    body: JSON.stringify(newCleanning),
    mode: "cors",
    headers: {
        'Content-Type': 'application/json'
    }
    }).then(response =>
        response.json()
    )

}

export function PutLimpezasRequest(roomNumber, isItClean, employeeId, cleanningDate) {

    const newCleanning = {

        "numeroQuarto": Number(roomNumber),
        "controle": isItClean,
        "id_funcionario": employeeId,
        "dataEntrada": cleanningDate,
    }

    return fetch(`http://localhost:3000/limpezas/${cleanningId}`, {
        method: "PUT",
        body: JSON.stringify(newCleanning),
        mode: "cors",
        headers: {
        'Content-Type': 'application/json'
    }
    }).then(response => response.json())
}

export function DeleteLimpezasRequest(cleanningId) { 
    return fetch(`http://localhost:3000/limpezas/${cleanningId}`, {
        method: "DELETE",
        mode: "cors",
    }).then((response) => {
        return response.json();
    })
}