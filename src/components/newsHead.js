import React from "react";
import styled from "styled-components";
import test_photo from "./test_photo.jpg";

const NewsHeadBlock = styled.div`
  margin: 20px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
`;

function NewsHead() {
  return (
    <NewsHeadBlock>
      <img src={test_photo} alt="test photo" />
      <h1>삼성생명, 新상담시스템 도입 정확성 높여</h1>
    </NewsHeadBlock>
  );
}

export default NewsHead;
