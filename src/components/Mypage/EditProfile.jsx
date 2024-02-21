import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/modules/profileSlice";
import styled from "styled-components";
import { useInput } from "shared/useInput";

function EditProfile() {
  const profile = useSelector((state) => state.profileSlice.profile);
  const [editClick, setEditClick] = useState(false);
  const [editedNickname, editedNicknameHandler] = useInput();
  const [avatar, setAvatar] = useState(profile.avatar);
  const [url, setUrl] = useState(profile.avatar);
  const inputRef = useRef(null);
  const imgRef = useRef(null);

  const dispatch = useDispatch();

  const editClickHandler = () => {
    setEditClick(true);
  };

  const sendEditedProfileToServer = async () => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("nickname", editedNickname);
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.patch(
        `https://moneyfulpublicpolicy.co.kr/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.log("프로필 편집 실패", error);
      alert("프로필 편집에 오류가 발생하였습니다.");
    }
  };

  const getData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://moneyfulpublicpolicy.co.kr/user",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(getProfile(response.data));
    } catch (error) {
      console.error("error", error);
      alert("유저정보를 불러오는 데에 오류가 발생했습니다.");
    }
  };

  const editHandler = async () => {
    await sendEditedProfileToServer();
    await getData();
    console.log(profile);
    setEditClick(false);
  };

  const imgClick = () => {
    if (inputRef) {
      inputRef.current.click();
    }
  };

  const selectFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrl(url);
      setAvatar(file);
    }
  };

  const cancelEdit = () => {
    setEditClick(false);
  };

  return (
    <EditProfileDiv>
      <EditHeaderDiv>
        {editClick ? (
          <>
            <BasicDataP>
              이미지 수정을 원하시면 이미지를 클릭해주세요!
            </BasicDataP>
            <div>
              <EditBtn $text="done" onClick={editHandler}>
                수정완료
              </EditBtn>
              <EditBtn onClick={cancelEdit}>취소</EditBtn>
            </div>
          </>
        ) : (
          <>
            <BasicDataP>기본정보</BasicDataP>
            <EditBtn onClick={editClickHandler}>수정</EditBtn>
          </>
        )}
      </EditHeaderDiv>
      {editClick ? (
        <>
          <ImgNNicknameDiv>
            <HiddenImgInput
              type="file"
              ref={inputRef}
              accept=".jpg, .png"
              onChange={selectFile}
              style={{ display: "none" }}
            ></HiddenImgInput>
            <MiniImg
              ref={imgRef}
              src={url}
              onClick={imgClick}
              alt="회원 이미지"
              $text="edit"
            />
            <NicknameTextArea
              defaultValue={profile.nickname}
              onChange={editedNicknameHandler}
            ></NicknameTextArea>
          </ImgNNicknameDiv>
          <PDiv>
            <p>email✉️</p>
            <textarea></textarea>
          </PDiv>
          <PDiv>
            <p>HP📱</p>
            <textarea></textarea>
          </PDiv>
          <PDiv $text="intro">
            <p>intro</p>
            <textarea></textarea>
          </PDiv>
        </>
      ) : (
        <>
          <NickDiv>
            <p>🖤nickname🖤</p>
            <ImgNNicknameDiv>
              <MiniImg src={profile.avatar} alt="회원 이미지" />
              <NicknameP>{profile.nickname}</NicknameP>
            </ImgNNicknameDiv>
          </NickDiv>

          <PDiv>
            <p>email ✉️</p>
            <P>{profile.email}</P>
          </PDiv>
          <PDiv>
            <p>HP 📱</p>
            <P>{profile.Hp}</P>
          </PDiv>
          <PDiv $text="intro">
            <p>intro</p>
            <P $text="intro">{profile.intro}</P>
          </PDiv>
        </>
      )}
    </EditProfileDiv>
  );
}

export default EditProfile;

const EditProfileDiv = styled.div`
  height: 550px;
  width: 600px;
  border: 3px solid white;
  border-radius: 10px;
  padding: 20px 10px;
`;

const EditHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

const BasicDataP = styled.p`
  font-weight: 550;
  font-size: 15px;
  margin-bottom: 10px;
  color: #353e55;
`;

const ImgNNicknameDiv = styled.div`
  height: 120px;
  width: 570px;
  border-bottom: 3px solid white;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 10px;
`;

const HiddenImgInput = styled.input`
  display: none;
`;

const MiniImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 7px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 70%;
  cursor: ${({ $text }) => ($text === "edit" ? "pointer" : null)};
`;

const NicknameTextArea = styled.textarea`
  display: flex;
  height: 70px;
  font-weight: 550;
  font-size: 22px;
  width: 450px;
  padding: 20px;
  border-radius: 8px;
  resize: none;
  margin: 0 0 10px 10px;
`;

const NicknameP = styled.p`
  display: flex;
  height: 80px;
  font-weight: 550;
  font-size: 22px;
  width: 450px;
  padding: 20px;
`;

const EditBtn = styled.button`
  font-size: 15px;
  color: #353e55;
  width: ${({ $text }) => ($text === "done" ? "70px" : "60px")};
  height: 28px;
  border: 2.5px solid gray;
  border-radius: 3px;
  margin-right: ${({ $text }) => ($text === "done" ? "3px" : 0)};
  &:hover {
    background-color: lightgray;
    color: #494d52;
    opacity: 1;
  }
`;

const NickDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const PDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: ${({ $text }) =>
    $text === "intro" ? null : "3px solid white"};
`;

const P = styled.p`
  height: ${({ $text }) => ($text === "intro" ? "120px" : "70px")};
  width: 570px;
  display: flex;
  align-items: ${({ $text }) => ($text === "intro" ? "center" : "flex-end")};
  padding: 10px;
  font-size: 16px;
`;
