import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const RecentlyVisitedCompanies = (props) => {
  const companyData = props.companyData;
  const navi = useNavigate();
  const RecentlyViewedCompaniesDiv = styled.div`
    background-color: rgb(13, 110, 253);
    width: 150px;
    color: white;
    text-align: center;
    font-family: "TTTogether";
    font-weight: 100;
    border-radius: 20px;
    margin-left: 20px;
  `;

  const RecentlyElementDiv = styled.div`
    cursor: pointer;
    &:hover {
      color: lightblue;
    }
  `;

  return (
    <RecentlyViewedCompaniesDiv>
      <h5 style={{ marginTop: "10px" }}>최근 방문 목록</h5>
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
