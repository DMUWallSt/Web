import React from "react";
import styled from "styled-components";
import test_photo from "./test_photo.jpg";

const NewsHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid black;

  img {
    width: 100px;
    height: 100px;
  }
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .content {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .newscom {
    color: #868e96;
    font-size: 18px;
    margin-top: 4px;
  }
`;

function NewsHead() {
  return (
    <NewsHeadBlock>
      <img src={test_photo} alt="test photo" />
      <h1>삼성생명, 新상담시스템 도입 정확성 높여</h1>
      <div className="content">
        삼성생명과 삼성생명서비스는 2003년 국내 최초로 콜센터 운영
        시스템(IPCC)을 구축한 이후 콜센터 전문 인력 양성과 시스템 개선으로 고객
        서비스에 지속적인 노...
      </div>
      <div className="newscom">매일경제</div>
    </NewsHeadBlock>
  );
}

export default NewsHead;
