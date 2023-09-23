import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const RecentlyVisitedCompanies = (props) => {
  //TODO: 테두리만 검정,테두리 그림자 설정, 배경 흰색, 글자색 검정
  const companyData = props.companyData;
  const navi = useNavigate();
  const RecentlyViewedCompaniesDiv = styled.div`
    //rgb(33, 37, 41);
    //rgb(13, 110, 253);
    background-color: rgb(13, 110, 253); /* 배경을 흰색으로 변경 */
    color: white; /* 글자색을 검정색으로 변경 */
    text-align: center;
    font-family: "Noto";
    font-weight: 100;
    border: 3px solid white; /* 테두리를 검정색 2px 두께로 설정 */
    border-radius: 20px;
    margin-left: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 테두리 그림자 추가 */
    padding: 10px;
  `;

  const RecentlyElementDiv = styled.div`
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      color: lightblue;
    }
  `;

  return (
    <RecentlyViewedCompaniesDiv>
      <h5 style={{ marginTop: "10px" }}>최근 방문 기업</h5>
      {JSON.parse(sessionStorage.getItem("recentlyViewed")).map((n, i) => {
        return (
          <RecentlyElementDiv
            key={n}
            onClick={() => {
              let recent = companyData.find((e) => {
                return e.text === n;
              });
              navi(`/news/${recent.id}`);
            }}
          >
            {n}
          </RecentlyElementDiv>
        );
      })}
    </RecentlyViewedCompaniesDiv>
  );
};

export default RecentlyVisitedCompanies;
