import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { lettersApi } from "../../axios/api";
import axios from "axios";

export const initialState = {
  letterList: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __addLetterList = createAsyncThunk(
  "ADD_LETTERLIST",
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addLetterList(payload));
    }, 2000);
  }
);

export const __getLetters = createAsyncThunk("GET_LETTERLIST", async () => {
  try {
    const { data } = await lettersApi.get(`/letters?_sort=-createdAt`);
    return data;
  } catch (error) {
    console.error("서버에서 letterList 불러오기 실패", error);
    alert("서버에서 팬레터를 불러오지 못했습니다.");
  }
});

export const __editLetters = createAsyncThunk(
  "EDIT_LETTERS",
  async ({ id, editContent }) => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/letters/${id}`,
        editContent
      );
      return data;
    } catch (error) {
      console.log("서버로 팬레터 수정 실패", error);
      alert("팬레터 수정에 오류가 발생하였습니다.");
    }
  }
);

const letterListSlice = createSlice({
  name: "letterListSlice",
  initialState,
  reducers: {
    addLetterList: (state = initialState, action) => {
      state.letterList = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getLetters.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letterList = action.payload;
    });
    builder.addCase(__getLetters.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__editLetters.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__editLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letterList = state.letterList.map((letter) =>
        letter.id === action.payload.id ? action.payload : letter
      );
    });
    builder.addCase(__editLetters.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default letterListSlice.reducer;

export const { addLetterList } = letterListSlice.actions;
