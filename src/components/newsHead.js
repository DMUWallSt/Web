import React, { useState } from 'react';
import styled from "styled-components";
import test_photo from "./test_photo.jpg";
import ModalComponent from './modal';

const NewsHeadBlock = styled.div`
  margin: 20px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;

  img {
    width: 150px;
    height: 100px;
    margin-bottom: 20px;
  }
  h1 {
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
    color: #343a40;
  }
  p {
    margin-left: 20px;
    font-size: 16px;
    color: #343a40;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


function NewsHead() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <NewsHeadBlock>
      <img src={test_photo} alt="test photo" />
      <div className="content">
        <h1 onClick={openModal}>삼성생명, 新상담시스템 도입 정확성 높여</h1>
        <ModalComponent
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          title="나일론 마스크 사실 외계인"
          newscom="동양미래일보"
          date="2345.09.20"
          content="대한민국헌법 전문 유구한 역사와 전통에 빛나는 우리 대한국민은 3ㆍ1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4ㆍ19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의ㆍ인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치ㆍ경제ㆍ사회ㆍ문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평화와 인류공영에 이바지함으로써 우리들과 우리들의 자손의 안전과 자유와 행복을 영원히 확보할 것을 다짐하면서 1948년 7월 12일에 제정되고 8차에 걸쳐 개정된 헌법을 이제 국회의 의결을 거쳐 국민투표에 의하여 개정한다."
        />
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of...
        </p>
        <div className="info">
          <p>매일경제</p>
          <p>2023.09.12</p>
        </div>
      </div>
    </NewsHeadBlock>
  );
}

export default NewsHead;
