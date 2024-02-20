import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    avatar: "/img/pngwing.com.png",
    intro: "소개글을 완성해주세요!",
    email: "내 email",
    Hp: "휴대폰 번호",
  },
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    // 서버에서 받아온 id, nickname, avatar 추가
    getProfile: (state, action) => {
      const { id, nickname, avatar } = action.payload;
      state.profile = {
        ...state.profile,
        id: id,
        nickname: nickname,
        avatar: avatar,
      };
    },
  },
});

export default profileSlice.reducer;

export const { getProfile } = profileSlice.actions;
