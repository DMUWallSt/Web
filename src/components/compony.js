import React from "react";
import styled from "styled-components";
import test_logo from "./test_logo.jpg";

const ComponyBlock = styled.div`
  margin: 20px;
  //border-bottom: 1px solid black;

  img {
      width: 150px;
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
  .code {
    color: #868e96;
    font-size: 18px;
    margin-top: 4px;
  }
  .stock {
    color: #d90429;
    font-size: 30px;
    margin-top: 4px;
    font-weight: bold;
  }
  .var {
    color: #d90429;
    font-size: 14px;
    margin-top: 4px;
  }
`;

function Componyinfo() {
  return (
    <ComponyBlock>
      <img src={test_logo} alt="test logo" />
      <h1>삼성생명032830</h1>
      <div className="content">
        1957년에 설립되어 업계 최대의 전속 설계사 조직과 계리 전문인력을
        보유하고 있는 삼성그룹 계열의 생명보험사. 보장성 및 연금/저축성 보험상품
        서비스 제공을 주요 사업으로 하며, 압도적인 브랜드 파워와 안정적인 영업
        기반을 바탕으로 업계 최상위 시장 지위를 유지하고 있음. 연결대상 주요
        종속회사로 삼성카드, 삼성자산운용, 삼성생명 태국법인,
        북경삼성치업유한공사, 삼성SRA자산운용 등이 있음.
      </div>
      <div className="newscom">KOSPI</div>
      <div className="stock">68,300</div>
      <div className="var">전일대비 +800</div>
    </ComponyBlock>
  );
}

export default Componyinfo;
