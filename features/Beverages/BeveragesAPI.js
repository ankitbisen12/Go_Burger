export function fetchAllBeverages() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    const response = await fetch("http://localhost:3000/api/v1/beverages");
    //TODO: Server will filter deleted products.
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBeverageById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/api/v1/beverages/" + id
    );

    const data = response.json();
    resolve({ data });
  });
}

export function createBeverage(beverage) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/api/v1/beverages", {
      method: "POST",
      body: JSON.stringify(beverage),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateBeverage(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3000/api/v1/beverages/" + update.id,
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
