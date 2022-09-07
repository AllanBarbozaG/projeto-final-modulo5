export function GetLimpezas() {
    return fetch("http://localhost:3000/limpezas", {
        method: "GET",
        mode: "cors",
    }).then((response) => {
    
        return response.json();
    });
}

export function PostLimpezas(roomNumber, isItClean, employeeId, cleanningDate) {

    const newCleanning = {
        "numeroQuarto": roomNumber,
        "controle": isItClean,
        "id_funcionario": employeeId,
        "data": cleanningDate,
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

export function PutLimpezas(cleanningId, roomNumber, isItClean, employeeId, cleanningDate) {

    const newCleanning = {

        "numeroQuarto": roomNumber,
        "controle": isItClean,
        "id_funcionario": employeeId,
        "data": cleanningDate,
    }

    return fetch(`http://localhost:3000/limpeza/${cleanningId}`, {
        method: "PUT",
        body: JSON.stringify(newCleanning),
        mode: "cors",
        headers: {
        'Content-Type': 'application/json'
    }
    }).then(response => response.json())
}

export function DeleteLimpezas(cleanningId) { 
    return fetch(`http://localhost:3000/funcionario/${cleanningId}`, {
        method: "DELETE",
        mode: "cors",
    }).then((response) => {
        return response.json();
    })
}