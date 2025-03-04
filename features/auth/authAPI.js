import AsyncStorage from "@react-native-async-storage/async-storage";

//for creating user
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.181.101:4000/api/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password) //done
    resolve({ data });
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("AuthApi is Running");
      const response = await fetch("http://192.168.181.101:4000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      console.log("Runn");
      console.log("Response:", response);
      if (response.ok) {
        const data = await response.json();
        await AsyncStorage.setItem("token", data.token);
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
    // TODO: on server it will only return some info of user (not password)
  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getITem("token");
    try {
      const response = await fetch("http://192.168.181.101:4000/api/v1/auth/check", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Send token in headers
        },
      });
      console.log("CheckAuth api running");
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
    // TODO: on server it will only return some info of user (not password)
  });
}

export function signOut() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://192.168.181.101:4000/api/v1/auth/logout");
      // console.log(response);
      if (response.ok) {
        // const data = await response.json();
        
        resolve({ data: "success" });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}
