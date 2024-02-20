import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../../shared/data";
import { selectClick } from "../../redux/modules/selectedBtnSlice";
import { addLetterList } from "../../redux/modules/letterListSlice";
import {
  clickChangeTrue,
  clickChangeFalse,
} from "../../redux/modules/clickSlice";
import {
  WholeDetailbackground,
  DetailImgStBox,
  DetailStBox,
  GoBackToListBtn,
  DetailDiv,
  DetailInsideDiv1,
  DetailInsideDiv2,
  DetailBtnDiv,
  DetailBtn,
  DetailAvatarImg,
  DetailNicknameP,
  DetailWriteToP,
  DetailP,
  DetailEditArea,
  DetailEditPArea,
} from "../../style/DetailStyle";
import axios from "axios";

function EditNDelete() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editContent, setEditContent] = useState("");
  const writeEditContent = (e) => {
    setEditContent(e.target.value);
  };

  const click = useSelector((state) => state.clickSlice.click);
  console.log(click);
  const letterList = useSelector((state) => state.letterListSlice.letterList);
  const foundLetter = letterList.find((letter) => letter.id === params.id);
  console.log(foundLetter);
  console.log(foundLetter.writedTo);
  const myMember = data.find((d) => d.name === foundLetter.writedTo);

  const askEdit = () => {
    alert("수정하시겠습니까?");
    dispatch(clickChangeTrue());
  };

  const editHandeler = async () => {
    if (editContent === foundLetter.content) {
      alert("수정된 내용이 없습니다.");
      dispatch(clickChangeTrue());
    } else {
      alert("수정이 완료되었습니다.");
      await serverEditHandler();
      await fetchLetter();
      dispatch(clickChangeFalse());
    }
  };

  const serverEditHandler = async () => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/letters/${foundLetter.id}`,
        editLetter()
      );
    } catch (error) {
      console.log("서버로 팬레터 수정 실패", error);
      alert("팬레터 수정에 오류가 발생하였습니다.");
    }
  };

  const editLetter = () => {
    return {
      ...foundLetter,
      content: editContent,
      createdAt: String(new Date()),
    };
  };

  const fetchLetter = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/letters`
      );
      console.log(data);
      dispatch(addLetterList(data));
    } catch (error) {
      console.error("서버에 letterList 불러오기 실패", error);
      alert("서버에서 팬레터를 불러오지 못했습니다.");
    }
  };

  const deleteHandeler = async () => {
    if (
      window.confirm(
        `${foundLetter.writedTo}에게 쓰신 펜레터를 정말 삭제하시겠습니까?`
      )
    ) {
      alert("삭제되었습니다.");
      navigate("/");
      dispatch(selectClick(myMember.id));
      await serverDeleteHandler();
      await fetchLetter();
      dispatch(clickChangeFalse());
    }
  };

  const serverDeleteHandler = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/letters/${foundLetter.id}`
      );
    } catch (error) {
      console.error("서버에서 팬레터 삭제실패", error);
      alert("서버에서 팬레터를 삭제하지 못했습니다.");
    }
  };

  useEffect(() => {
    // 수정하기를 완료하지 않고 뒤로가기를 한 후, 다시 수정하기로 들어오면 화면 초기화시키기
    dispatch(clickChangeFalse());
  }, [dispatch]);

  const cancelEdit = () => dispatch(clickChangeFalse());

  const goBackToLetterList = () => {
    navigate("/");
    dispatch(selectClick(myMember.id));
  };

  return (
    <WholeDetailbackground>
      <DetailImgStBox>
        <DetailStBox>
          <GoBackToListBtn onClick={goBackToLetterList}>
            🩶Go back to letterlist🖤
          </GoBackToListBtn>
          {/* ------------------------------------------------------------ */}
          <DetailDiv>
            <DetailInsideDiv1>
              <DetailAvatarImg src={foundLetter.avatar} alt="avartar" />
              <DetailNicknameP>{foundLetter.nickname}</DetailNicknameP>
            </DetailInsideDiv1>
            <DetailInsideDiv2>
              <DetailBtnDiv>
                {click ? (
                  <>
                    <DetailBtn onClick={editHandeler}>수정완료</DetailBtn>
                    <DetailBtn onClick={cancelEdit}>취소</DetailBtn>
                  </>
                ) : (
                  <>
                    <DetailBtn onClick={askEdit}>수정</DetailBtn>
                    <DetailBtn onClick={deleteHandeler}>삭제</DetailBtn>
                  </>
                )}
              </DetailBtnDiv>
              <DetailP>{foundLetter.createdAt}</DetailP>
            </DetailInsideDiv2>
          </DetailDiv>
          <DetailWriteToP>To : {foundLetter.writedTo}</DetailWriteToP>
          {/* ------------------------------------------------------------ */}
          {click ? (
            <DetailEditArea
              defaultValue={foundLetter.content}
              onChange={writeEditContent}
              autoFocus
            ></DetailEditArea>
          ) : (
            <DetailEditPArea>{foundLetter.content}</DetailEditPArea>
          )}
        </DetailStBox>
      </DetailImgStBox>
    </WholeDetailbackground>
  );
}

export default EditNDelete;
