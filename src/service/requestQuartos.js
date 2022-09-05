class RequestQuarto {
  showQuartos() {
    return fetch("http://localhost:3000/quartos", {
      method: "GET",
      mode: "cors",
    }).then((response) => {
      return response.json();
    });
  }

  createQuarto(numeroQuarto, nomeHospedes, controle, telefone) {
    const quest = {
      numeroQuarto: numeroQuarto,
      nomeHospedes: nomeHospedes,
      controle: controle,
      telefone: telefone,
    };

    return fetch("http://localhost:3000/quartos", {
      method: "POST",
      body: JSON.stringify(quest),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  updateQuarto(id, numeroQuarto, nomeHospedes, controle, telefone) {
    const quest = {
      numeroQuarto: numeroQuarto,
      nomeHospedes: nomeHospedes,
      controle: controle,
      telefone: telefone,
    };

    return fetch(`http://localhost:3000/quartos/${id}`, {
      method: "PUT",
      body: JSON.stringify(quest),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json().catch);
  }

  deleteQuarto(id) {
    return fetch(`http://localhost:3000/quartos/${id}`, {
      method: "DELETE",
      mode: "cors",
    }).then((response) => {
      return response.json();
    });
  }
}

export default RequestQuarto;
