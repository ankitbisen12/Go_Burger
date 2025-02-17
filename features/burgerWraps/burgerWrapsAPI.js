export function fetchAllBurgerWraps() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    const response = await fetch("http://localhost:3000/api/v1/burgerWraps");
    //TODO: Server will filter deleted products.
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBurgerWrapsById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/api/v1/burgerWraps/" + id
    );

    const data = response.json();
    resolve({ data });
  });
}

export function createBurgerWraps(desserts) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/api/v1/burgerWraps", {
      method: "POST",
      body: JSON.stringify(desserts),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateBurgerWraps(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/api/v1/burgerWraps/" + update.id,
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
