import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  categories: [],
  quizzes: [],
  allQuizzes: [],
  quiz: null,
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getAllQuizzes = createAsyncThunk(
  "category/getAllQuizzes",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/quizzes");
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getQuizzesInCategory = createAsyncThunk(
  "category/getQuizzes",
  async (categoryName, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/categories/${categoryName}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getQuiz = createAsyncThunk(
  "quiz/getQuiz",
  async (quizId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/quizzes/${quizId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getAllQuizzes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.allQuizzes = action.payload.quizes;
      })
      .addCase(getAllQuizzes.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getQuizzesInCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuizzesInCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.quizes = action.payload.quizes.models;
      })
      .addCase(getQuizzesInCategory.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.loading = false;
        state.quiz = action.payload.quiz;
      })
      .addCase(getQuiz.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      });
  },
});

export default categorySlice.reducer;
