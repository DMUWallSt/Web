import "./news.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BoxTemplate from "../components/box";
import NewsHead from "../components/newsHead";
import Companyinfo from "../components/company";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

function News(props) {
  const { id } = useParams();

  const navi = useNavigate();

  const PaginationBox = styled.div`
    // 페이지네이션을 포함한 박스
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    height: 100vh; /* Optional to make the container full height */
  `;

  const NotFoundBox = styled.div`
    text-align: center;
    background-color: #007bff;
  `;
  const NotFoundBoxH1 = styled.h1`
    margin: 10px;
    color: white;
    font-family: "NOTO";
    padding: 5px;
  `;

  const NotFoundBoxH3 = styled.h3`
    margin: 10px;
    color: white;
    font-family: "NOTO";
  `;

  const GoBackButton = styled.button`
    text-align: center;
    background-color: #007bff;
    border-radius: 5px;
    width: 13vw;
    border: none;
  `;

  const [newsData, setNewsData] = useState([]);
  const [dataSuccess, setDataSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // axios에서 정보를 받아오고 랜더링하기 위한 상태 state
  const [error, setError] = useState(null); // 에러발생시 에러를 저장할 수 있는 state

  useEffect(() => {
    // 데이터를 비동기로 가져옵니다.
    setLoading(true);
    async function fetchNewsData() {
      try {
        const response = await axios.get(`http://localhost:3002/news/${id}`);
        setDataSuccess(true);
        console.log(response.data);
        setLoading(false);
        setNewsData(response.data);
      } catch (error) {
        setLoading(false);
        setError(error);
        setDataSuccess(false);
        console.error(error);
      }
    }
    fetchNewsData(); // 데이터 가져오는 함수 호출
  }, []);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handleChange = (e, value) => {
    console.log(value);
    setCurrentPage(value);
  };

  const newsPerPage = 5;
  const currentPageLast = currentPage * newsPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - newsPerPage; // 현재 페이지의 끝
  const currentNews = newsData.slice(currentPageFirst, currentPageLast); // 배열의 begin부터 end까지의 얕은 복사본
  const pageNumber = Math.ceil(newsData.length / newsPerPage); // 총 페이지 수(올림)

  if (loading)
    return (
      <NotFoundBox>
        <NotFoundBoxH1>기업 정보를 받아오는 중입니다.....</NotFoundBoxH1>
      </NotFoundBox>
    );
  if (error)
    return (
      <div style={{ textAlign: "center" }}>
        <NotFoundBox>
          <NotFoundBoxH1>
            기업이 존재하지 않습니다. 정확한 기업명을 입력해 주세요.
          </NotFoundBoxH1>
        </NotFoundBox>
        <GoBackButton
          onClick={() => {
            navi(-1);
          }}
        >
          <NotFoundBoxH3>이전 페이지</NotFoundBoxH3>
        </GoBackButton>
      </div>
    );
  return (
    <div className="main">
      <PaginationBox>
        {dataSuccess ? (
          <div>
            <BoxTemplate>
              {currentNews &&
                currentNews.map((n) => {
                  return <NewsHead key={n.toString()} newsData={n} id={n.id} />;
                })}
            </BoxTemplate>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={pageNumber}
                  page={currentPage}
                  color="primary"
                  showFirstButton
                  showLastButton
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </div>
        ) : null}
      </PaginationBox>
      {dataSuccess && (
        <BoxTemplate>
          <Companyinfo />
        </BoxTemplate>
      )}
    </div>
  );
}

export default News;
