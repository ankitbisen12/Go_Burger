export function fetchAllMenu() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    const response = await fetch("http://192.168.181.101:4000/api/v1/menu");
    //TODO: Server will filter deleted products.
    const data = await response.json();
    resolve({ data });
  });
}

//192.168.181.101

export function fetchMenuById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/menu/" + id);

    const data = response.json();
    resolve({ data });
  });
}

export function createMenu(menu) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/menu", {
      method: "POST",
      body: JSON.stringify(menu),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateMenu(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/menu/" + update.id,
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
