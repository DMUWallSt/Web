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
          title="모달 타이틀"
          content="모달 내용을 입력하세요."
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
