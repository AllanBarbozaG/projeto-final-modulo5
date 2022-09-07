function getReserva() {
    fetch("http://localhost:3000/reservas", {
        method: "GET",
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data
    })
}

export default getReserva