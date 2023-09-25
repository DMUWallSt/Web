import React from "react";
import styled from "styled-components";
import test_logo from "./test_logo.png";
import chart from "./chart_dummy.png"

const CompanyBlock = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  font-family: "Noto";

  .title{
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
  .stockinfo {
    display: flex;
    flex-direction: row;
    //justify-content: space-around;
  }
  .score {
    display: flex;
    flex-direction: column;
    padding-right: 150px;
    border-right: 1px solid black;
    margin-bottom: 20px;
  }
  .stock {
    display: flex;
    flex-direction: column;

  }

  img {
    width: 300px;
    height: 30px;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  h1 #stockname {
    font-size: 36px;
    color: #343a40;
    text-align: center;
    font-weight: bold;
  }
  .title #stockid {
    margin-left: 10px;
    margin-top: 10%;

  }
  .content {
    margin-top: 4px;
    color: #868e96;
    font-size: 18px;
  }
  #chart {
    width: 800px;
    height: 300px;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .stockinfo .stock {
    text-align: center;
    justify-content: center;
    padding-left: 150px;
  }
  
`;

function Companyinfo() {
  return (
    <CompanyBlock>
      <img src={test_logo} alt="test logo" />
      <div className="title">
        <h1 id="stockname">삼성전자</h1>
        <p id="stockid">005930 | KOSPI</p>
      </div>
      <div className="content">
        <p>
        한국 및 DX부문 해외 9개 지역총괄과 DS부문 해외 5개 지역총괄, SDC, Harman 등 230개의 종속기업으로 구성된 글로벌 전자기업임.
        세트사업은 TV를 비롯 모니터, 냉장고, 세탁기, 에어컨, 스마트폰, 네트워크시스템, 컴퓨터 등을 생산하는 DX부문이 있음.
        부품 사업에는 DRAM, NAND Flash, 모바일AP 등의 제품을 생산하고 있는 DS 부문과 중소형OLED 등의 디스플레이 패널을 생산하고 있는 SDC가 있음.
        </p>
      </div>
      <div className="stockinfo">
        <div className="score">
          <h1>투자점수</h1>
          <h3>재무점수 | 100</h3>
          <h3>최근점수 | 100</h3>
          <h3>총 점수 | 100</h3>
          <p> 투자에 문제가 없는 점수입니다.</p>
        </div>
        <div className="stock">
          <h1>71,400</h1>
          <p>전일대비 ▲500 | +0.71%</p>
        </div>
      </div>
      <img id="chart" src={chart} alt="chart"/>
    </CompanyBlock>
  );
}

export default Companyinfo;
