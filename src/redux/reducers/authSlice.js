import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  loading: false,
  user: null,
  token: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: loginDetails.email,
        password: loginDetails.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async (signUpDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        email: signUpDetails.email,
        password: signUpDetails.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const testLogin = createAsyncThunk(
  "auth/testLogin",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: "manojsarna@gmail.com",
        password: "Manoj@123",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async (arg, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("smashQuizToken");
    try {
      const response = await axios.post(
        "/api/auth/verify",
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  reducers: {
    logout(state) {
      localStorage.removeItem("smashQuizToken");
      state.user = null;
      state.token = null;
      toast.success("Logged Out");
    },
  },
  initialState,
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("smashQuizToken", action.payload.encodedToken);
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        toast.success("Login Successful");
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("smashQuizToken", action.payload.encodedToken);
        state.user = action.payload.createdUser;
        state.token = action.payload.encodedToken;
        toast.success("Signup Successful");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(testLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(testLogin.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("smashQuizToken", action.payload.encodedToken);
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        toast.success("Login Successful");
      })
      .addCase(testLogin.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(verify.pending, (state) => {
        state.loading = true;
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.encodedToken;
      })
      .addCase(verify.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
