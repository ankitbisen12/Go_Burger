export function fetchAllBurger() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    const response = await fetch("http://192.168.181.101:4000/api/v1/burgers");
    //TODO: Server will filter deleted products.
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBurgerById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/burgers/" + id);

    const data = response.json();
    resolve({ data });
  });
}

export function createBurger(burgers) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/burgers", {
      method: "POST",
      body: JSON.stringify(burgers),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateBurger(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/burgers/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
