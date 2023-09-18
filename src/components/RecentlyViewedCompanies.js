import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
const RecentlyVisitedCompanies = () => {
  const RecentlyViewedCompaniesDiv = styled.div`
    margin-left: 30px;
  `;
  let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
  useEffect(() => {
    const recentlyViewedData = localStorage.getItem("recentlyViewed");

    if (!recentlyViewedData) {
      localStorage.setItem("recentlyViewed", JSON.stringify([]));
    }
  }, []);

  console.log(recentlyViewed);
  return (
    <RecentlyViewedCompaniesDiv style={{ backgroundColor: "lightblue" }}>
      <h4>최근 방문한 기업 목록</h4>
      {recentlyViewed}
    </RecentlyViewedCompaniesDiv>
  );
};

export default RecentlyVisitedCompanies;
