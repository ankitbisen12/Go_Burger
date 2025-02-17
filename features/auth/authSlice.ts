import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, createUser, signOut, checkAuth } from "./authAPI";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
// import { updateUser } from "../user/userAPI";

interface AuthState {
  loggedInUserToken: string | null; // Allow both string and null
  status: "idle" | "loading" | "failed";
  error: string | null;
  userChecked: boolean;
}

const initialState: AuthState = {
  loggedInUserToken: null, //only contain user identity i.e id/role
  status: "idle",
  error: null,
  userChecked: false,
};

interface UserDataProps {
  email: string;
  password: string | undefined;
}

interface LoginResponse {
  token: string;
}

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk<LoginResponse, UserDataProps>(
  "user/loginUser",
  async (loginInfo, { rejectWithValue }) => {
    console.log("Sending login request with:", loginInfo);
    try {
      const response = await loginUser(loginInfo);
      console.log("API response:", response);
      return response.data as LoginResponse;
    } catch (error) {
      return rejectWithValue("Network request failed. Please try again.");
    }
  }
);

export const checkAuthAsync = createAsyncThunk("user/checkUser", async () => {
  try {
    const response = await checkAuth();
    console.log("Response inside checkAuthAsync", response);
    return response.data;
  } catch (error) {
    //console.log(error);
  }
});

export const signOutAsync = createAsyncThunk("user/signOut", async () => {
  const response = await signOut();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

// export const updateUserAsync = createAsyncThunk(
//   "user/updateUser",
//   async (update) => {
//     const response = await updateUser(update);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload.token;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload.token;

        AsyncStorage.setItem("token", action.payload.token)
          .then(() => console.log("Token saved to AsyncStorage"))
          .catch((error) => console.error("Failed to store token:", error));
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        // state.error = action.payload;
      })
      // .addCase(updateUserAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(updateUserAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.loggedInUserToken = action.payload;
      // })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = null;
      })
      .addCase(checkAuthAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
        state.userChecked = true;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.status = "idle";
        state.userChecked = true;
      });
  },
});

export const selectLoggedInUser = (state: any) => state.auth.loggedInUserToken;
export const selectError = (state: any) => state.auth.error;
export const selectCheckedUser = (state: any) => state.auth.userChecked;

export default authSlice.reducer;
