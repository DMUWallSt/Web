import React from "react";
import styled from "styled-components";
import scorebar from "./scorebar.png";
import choice from "./choice.png";

const CompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Noto";
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #FFFFFF;

  .title {
    display: flex;
    flex-direction: row;
  }

  .stockinfo {
    display: flex;
    flex-direction: row;
    color: white;
  }

  .score {
    display: flex;
    flex-direction: column;
  }

  .stock {
    display: flex;
    flex-direction: row;
  }

  .stock #diff {
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    justify-content: center;
  }
  
  .stock #stocktoday {
    color: white;
  }

  h1 #stockname {
    font-size: 30px;
    color: #343a40;
    text-align: center;
    font-weight: bold;
  }

  .stockinfo .stock {
    text-align: center;
    justify-content: center;
  }

  .scorebar #tri {
    position: absolute;
    left: 39.7%; //1번 
    //left: 45.2%; //2번
    //left: 50.9%; //3번
    //left: 56.6%; //4번
    //left: 62.3%; //5번
    top: 56px;
  }
`;

function Companyinfo(props) {
  return (
    props.companyData && (
      <CompanyBlock>
        <div className="company">  
          <p id="stockid">{props.companyData[0].stock_code} | KOSPI</p> 
          <h1 id="stockname">{props.companyData[0].name}</h1> 
          <div className="stock"> 
          <h1 id="stocktoday">{props.companyData[0].stock_today}</h1>
            <p id="diff">
              {props.companyData[0].ratio >= 0
                ?  props.companyData[0].ratio
                :  props.companyData[0].ratio}{" % "}
              | {props.companyData[0].diff}
              {" "}
            </p>
          </div>
        </div>
        <div className="scorebar">
          <img src = {scorebar} id="bar"></img>
          <img src = {choice} id="tri"></img>
          <p id="comment" style={{textAlign: "center"}}>투자에 적합한 점수입니다.</p>
        </div>
        <div className="stockinfo">
          <div className="score">
            <h3>재무점수 | {props.companyData[0].finance_score}</h3>
            <h3>최근점수 | {props.companyData[0].recen_score}</h3>
            <h3>총 점수 | {props.companyData[0].total_score}</h3>
          </div>
        </div>
      </CompanyBlock>
    )
  );
}

export default Companyinfo;
