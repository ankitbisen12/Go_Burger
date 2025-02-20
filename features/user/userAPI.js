//fetching all the orders for selected user
export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/orders/own"
    );
    const data = await response.json();
    resolve({ data });
  });
}

//fetching necessary info of user.
export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/users/own"
    );
    const data = await response.json();
    resolve({ data });
  });
}

//function for upadting user.
export function updateUser(updateUser) {
  // console.log(updateUser);
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.181.101:4000/api/v1/users/" + updateUser.id,
      {
        method: "PATCH",
        body: JSON.stringify(updateUser),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
