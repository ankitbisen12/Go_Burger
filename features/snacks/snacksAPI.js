export function fetchAllSnacks() {
    return new Promise(async (resolve) => {
      //TODO:we will not hard-coded server URL here
      const response = await fetch("http://192.168.181.101:4000/api/v1/snacks");
      //TODO: Server will filter deleted products.
      const data = await response.json();
      resolve({ data });
    });
  }
  
  export function fetchSnacksById(id) {
    return new Promise(async (resolve) => {
      const response = await fetch("http://192.168.181.101:4000/api/v1/snacks/" + id);
  
      const data = response.json();
      resolve({ data });
    });
  }
  
  export function createSnacks(snacks) {
    return new Promise(async (resolve) => {
      const response = await fetch("http://192.168.181.101:4000/api/v1/snacks", {
        method: "POST",
        body: JSON.stringify(snacks),
        headers: { "content-type": "application/json" },
      });
  
      const data = await response.json();
      resolve({ data });
    });
  }
  
  export function updateSnacks(update) {
    return new Promise(async (resolve) => {
      const response = await fetch(
        "http://192.168.181.101:4000/api/v1/snacks/" + update.id,
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
  