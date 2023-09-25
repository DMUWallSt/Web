import React, { useState } from "react";
import styled from "styled-components";
import ModalComponent from "./modal";

function NewsHead(props) {
  const NewsHeadBlock = styled.div`
    margin: 20px;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    img {
      width: 150px;
      height: 100px;
      object-fit: cover;
      background-color: #000; /* 검은 배경색 추가 */
      display: flex;
      justify-content: center; /* 가운데 정렬 */
      align-items: center;
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
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    .info {
      font-weight: bold;
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <NewsHeadBlock>
      <img src={props.newsData.thumbnail_link} />
      <div className="content">
        <h1 onClick={openModal}>{props.newsData.title}</h1>
        <ModalComponent
          img={props.newsData.thumbnail_link}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          title={props.newsData.title}
          newscom={props.newsData.press}
          date={props.newsData.date}
          content={props.newsData.content}
        />
        <p>{props.newsData.content}</p>
        <div className="info">
          <span>{props.newsData.press}</span>
          <span>{props.newsData.date}</span>
        </div>
      </div>
    </NewsHeadBlock>
  );
}

export default NewsHead;
