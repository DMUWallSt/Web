import React from "react";
import styled from "styled-components";
import test_logo from "./test_lg.png";
import chart from "./chart_dummy.png";

const CompanyBlock = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  font-family: "Noto";

  .title {
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

  .stockinfo .stock {
    text-align: center;
    justify-content: center;
  }

  #stocktoday {
    color: red;
  }
`;

function Companyinfo(props) {
  return (
    props.companyData && (
      <CompanyBlock>
        <div className="title">
          <h1 id="stockname">{props.companyData[0].name}</h1>
          <p id="stockid">{props.companyData[0].stock_code} | KOSPI</p>
        </div>
        <div className="content">
          <p>{props.companyData[0].company_info}</p>
        </div>
        <div className="stockinfo">
          <div className="score">
            <h1>투자점수</h1>
            <h3>재무점수 | {props.companyData[0].finance_score}</h3>
            <h3>최근점수 | {props.companyData[0].recen_score}</h3>
            <h3>총 점수 | {props.companyData[0].total_score}</h3>
            <p> 투자에 문제가 없는 점수입니다.</p>
          </div>
          <div className="stock">
            <h1 id="stocktoday">{props.companyData[0].stock_today}</h1>
            <p>전일대비 ▲300 | + 0.29%</p>
          </div>
        </div>
      </CompanyBlock>
    )
  );
}

export default Companyinfo;
