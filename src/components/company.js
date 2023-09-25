import React from "react";
import styled from "styled-components";
import test_logo from "./test_lg.png";
import chart from "./chart_dummy.png"

const CompanyBlock = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  font-family: "Noto";

  .title{
    display: flex;
    flex-direction: row;
  }

  .stockinfo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
    margin: 0 auto;
  }

  img {
    width: 100px;
    height: 50px;
    object-fit: contain;
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
    padding-top: 23px;
  }
  .content {
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
  }

  #stocktoday {
    color: red;
  }
  
`;

function Companyinfo() {
  return (
    <CompanyBlock>
      <img src={test_logo} alt="test logo" />
      <div className="title">
        <h1 id="stockname">LG전자</h1>
        <p id="stockid">066570 | KOSPI</p>
      </div>
      <div className="content">
        <p>
        동사와 종속기업의 주요사업부문은 Home Appliance & Air 솔루션, Home Entertainment, Mobile Communications, Vehicle component 솔루션 등 6개로 구분.
        OLED TV는 초슬림, 월페이퍼, 롤러블 TV 등 지속적인 혁신 제품 출시로 프리미엄 시장을 지속 선도하고 있음.
        디스플레이 오디오와 내비게이션 영역에서는 동사의 디스플레이 및 소프트웨어 역량을 활용하여 제품 차별화중.
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
          <h1 id="stocktoday">103,400</h1>
          <p>전일대비 ▲300 | + 0.29%</p>
        </div>
      </div>
      <img id="chart" src={chart} alt="chart"/>
    </CompanyBlock>
  );
}

export default Companyinfo;
