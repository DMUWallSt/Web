import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
const RecentlyVisitedCompanies = () => {
  const RecentlyViewedCompaniesDiv = styled.div`
    margin-left: 30px;
  `;
  
  return (
    <RecentlyViewedCompaniesDiv style={{ backgroundColor: "lightblue" }}>
      <h4>최근 방문한 기업 목록</h4>
      {JSON.parse(sessionStorage.getItem('recentlyViewed')).map((n)=>{
        return <div>{n}</div>
      })}
    </RecentlyViewedCompaniesDiv>
  );
};

export default RecentlyVisitedCompanies;
