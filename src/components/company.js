import React from "react";
import styled from "styled-components";

const CompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Noto";
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #333;

  .title {
    display: flex;
    flex-direction: row;
  }

  .stockinfo {
    display: flex;
    flex-direction: row;
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
    font-size: 36px;
    color: #343a40;
    text-align: center;
    font-weight: bold;
  }

  .stockinfo .stock {
    text-align: center;
    justify-content: center;
  }

  
`;

function Companyinfo(props) {
  return (
    props.companyData && (
      <CompanyBlock>
        <div className="company">  
          <h1 id="stockname">{props.companyData[0].name}</h1> 
          <p id="stockid">{props.companyData[0].stock_code}</p> 
          <div className="stock"> 
          <h1 id="stocktoday">{props.companyData[0].stock_today}</h1>
            <p id="diff">
              {props.companyData[0].ratio >= 0
                ?  props.companyData[0].ratio
                :  props.companyData[0].ratio}{"%"}
              | {props.companyData[0].diff}
              {" "}
            </p>
          </div>
        </div>
        <div className="score_bar">
          <img src="./scorebar.png"></img>
          <p id="comment">투자에 적합한 점수입니다.</p>
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
