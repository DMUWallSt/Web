import React from "react";
import styled from "styled-components";
import test_photo from "./test_photo.jpg";

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
`;

function NewsHead() {
  return (
    <NewsHeadBlock>
      <img src={test_photo} alt="test photo" />
      <div className="content">
        <h1>삼성생명, 新상담시스템 도입 정확성 높여</h1>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </NewsHeadBlock>
  );
}

export default NewsHead;
