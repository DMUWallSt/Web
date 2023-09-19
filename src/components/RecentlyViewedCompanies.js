import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
const RecentlyVisitedCompanies = () => {
  const RecentlyViewedCompaniesDiv = styled.div`
    background-color: rgb(13, 110, 253);
    width: 150px;
    margin-left: 30px;
    color: white;
    text-align: center;
    font-family: "TTTogether";
    font-weight: 100;
    border-radius: 20px;
  `;

  return (
    <RecentlyViewedCompaniesDiv>
      <h5 style={{ marginTop: "10px" }}>최근 방문 목록</h5>
      {JSON.parse(sessionStorage.getItem("recentlyViewed")).map((n) => {
        return <div>{n}</div>;
      })}
    </RecentlyViewedCompaniesDiv>
  );
};

export default RecentlyVisitedCompanies;
