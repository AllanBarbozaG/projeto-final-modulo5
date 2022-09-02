function request() {
  return fetch("http://localhost:3000/hospedes", {
    method: "GET",
    mode: "cors",
  }).then((response) => {
    return response.json();
  });
}

export default request