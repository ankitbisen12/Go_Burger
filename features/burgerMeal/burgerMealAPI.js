export function fetchAllBurgerMeal() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-coded server URL here
    const response = await fetch("http://192.168.181.101:4000/api/v1/burgerMeal");
    //TODO: Server will filter deleted products.
    const data = await response.json();
    // console.log("dffdygdyg",data);
    resolve({ data });
  });
}

export function fetchBurgerMealById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/burgerMeal/" + id
    );

    const data = response.json();
    resolve({ data });
  });
}

export function createBurgerMeal(burgerMeal) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/burgerMeal", {
      method: "POST",
      body: JSON.stringify(burgerMeal),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateBurgerMeal(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/burgerMeal/" + update.id,
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
