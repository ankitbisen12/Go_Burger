export function fetchAllDessert() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    const response = await fetch("http://192.168.181.101:4000/api/v1/desserts");
    //TODO: Server will filter deleted products.
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchDessertById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/desserts/" + id);

    const data = response.json();
    resolve({ data });
  });
}

export function createDessert(desserts) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/desserts", {
      method: "POST",
      body: JSON.stringify(desserts),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateDessert(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/desserts/" + update.id,
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
