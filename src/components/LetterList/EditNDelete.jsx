import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../../shared/data";
import {
  DetailImgStBox,
  DetailStBox,
  GoBackToListBtn,
  DetailHeader,
  DetailHeaderInsideDiv1,
  DetailHeaderInsideDiv2,
  DetailBtnDiv,
  DetailBtn,
  DetailAvatarImg,
  DetailNicknameP,
  DetailWriteToP,
  DetailP,
  DetailContentP,
  DetailEditArea,
} from "../../style/DetailStyle";
import { useDispatch, useSelector } from "react-redux";
import { editNdeleteLetterList } from "../../redux/modules/letterListReducer";
import { selectClick } from "../../redux/modules/selectedBtnReducer";

function EditNDelete() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const letterList = useSelector((state) => state.letterListReducer.letterList);
  console.log(letterList);
  const foundLetter = letterList.find((letter) => letter.id === params.id);
  console.log(foundLetter);

  const [click, setClick] = useState(false);
  const [editContent, setEditContent] = useState(foundLetter.content);

  let restLetterList = letterList.filter(
    (letter) => letter.id !== foundLetter.id
  );

  const goBackBtndata = data.find((d) => d.name === foundLetter.writedTo);

  const askEditHandelert = () => {
    alert("수정하시겠습니까?");
    setClick(true);
    console.log(textAreaRef);
    console.log(textAreaRef.current);
    // textAreaRef.current.focus();
  };

  useEffect(() => {
    if (textAreaRef.current && click) {
      console.log(textAreaRef);
      console.log(textAreaRef.current);
      textAreaRef.current.focus();
    }
  });

  const renewContent = (e) => {
    setEditContent(e.target.value);
  };

  const editHandeler = () => {
    if (editContent === foundLetter.content) {
      alert("수정된 내용이 없습니다.");
      setClick(true);
    } else {
      alert("수정이 완료되었습니다.");
      setClick(false);
      dispatch(
        editNdeleteLetterList([
          ...restLetterList,
          {
            ...foundLetter,
            content: editContent,
            createdAt: String(new Date()),
          },
        ])
      );

      // foundletter.content = editcontent
      // dispatch(editNdeleteLetterList(...restLetyterList, foundLetter)); --- 리듀서에서 [action.payload]로 받기 => 실패
      // dispatch(editNdeleteLetterList([...restLetyterList, foundLetter])) --- 리듀서에서 action.payload로 받기 => 성공
      // 왜지??
    }
  };

  const deleteHandeler = () => {
    if (
      window.confirm(
        `${foundLetter.writedTo}에게 쓰신 펜레터를 정말 삭제하시겠습니까?`
      )
    ) {
      setClick(false);
      dispatch(editNdeleteLetterList(...restLetterList));
      alert("삭제되었습니다.");
      dispatch(selectClick(goBackBtndata.id));
      navigate("/");
    }
  };

  const goBackToLetterList = () => {
    dispatch(selectClick(goBackBtndata.id));
    navigate("/");
  };

  return (
    <DetailImgStBox key={foundLetter.id}>
      <DetailStBox>
        <GoBackToListBtn onClick={goBackToLetterList}>
          🩶팬레터 목록으로 돌아가고 싶다면 여기를 클릭해주세요🖤
        </GoBackToListBtn>
        {/* ------------------------------------------------------------ */}
        <DetailHeader>
          <DetailHeaderInsideDiv1>
            <DetailAvatarImg src={foundLetter.avatar} alt="avartar" />
            <DetailNicknameP>{foundLetter.nickname}</DetailNicknameP>
          </DetailHeaderInsideDiv1>
          <DetailHeaderInsideDiv2>
            <DetailBtnDiv>
              <DetailBtn onClick={click ? editHandeler : askEditHandelert}>
                {click ? "수정완료" : "수정"}
              </DetailBtn>
              <DetailBtn onClick={deleteHandeler}>삭제</DetailBtn>
            </DetailBtnDiv>
            <DetailP>{foundLetter.createdAt}</DetailP>
          </DetailHeaderInsideDiv2>
        </DetailHeader>
        <DetailWriteToP>To : {foundLetter.writedTo}</DetailWriteToP>
        {click ? (
          <DetailEditArea
            value={editContent}
            onChange={renewContent}
            ref={textAreaRef}
          >
            {foundLetter.content}
          </DetailEditArea>
        ) : (
          <DetailContentP>{foundLetter.content}</DetailContentP>
        )}
      </DetailStBox>
    </DetailImgStBox>
  );
}

export default EditNDelete;
