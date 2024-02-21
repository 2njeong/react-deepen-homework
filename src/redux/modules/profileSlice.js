import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  profile: {
    avatar: "",
    intro: "소개글을 완성해주세요!",
    email: "내 email",
    Hp: "휴대폰 번호",
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const __getProfile = createAsyncThunk(
  "GET_PROFILE_FROM_SERVER",
  async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const { data } = await axios.get(
        "https://moneyfulpublicpolicy.co.kr/user",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.error("error", "로그인이 필요한 상태");
    }
  }
);

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      const { id, nickname, avatar } = action.payload;
      state.profile = {
        ...state.profile,
        id: id,
        nickname: nickname,
        avatar: !avatar ? "/img/pngwing.com.png" : avatar,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getProfile.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.profile = {
        ...action.payload,
        avatar: !action.payload.avatar
          ? "/img/pngwing.com.png"
          : action.payload.avatar,
      };
    });
    builder.addCase(__getProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default profileSlice.reducer;

export const { getProfile } = profileSlice.actions;
