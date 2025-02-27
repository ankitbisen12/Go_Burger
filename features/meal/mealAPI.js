export function fetchAllMeal() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    console.log("fetchmeal is running");
    const response = await fetch("http://192.168.181.101:4000/api/v1/meal");
    //TODO: Server will filter deleted products.
    console.log("fetchmeal is done");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchMealById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/meal/" + id
    );

    const data = response.json();
    resolve({ data });
  });
}

export function createMeal(meal) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/meal", {
      method: "POST",
      body: JSON.stringify(meal),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateMeal(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/meal/" + update.id,
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
