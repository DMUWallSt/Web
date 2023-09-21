import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import News from "./routes/news";
import { useState, useEffect } from "react";
import MyWordcloud from "./reactwordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

//TODO: 반응형 적용
//TODO: 반응형 적용
function App() {
  const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18vh;
    margin: 0;
  `;

  const SearchBox = styled.div`
    display: flex;
    width: 600px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  `;

  const SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    margin-right: 10px; /* 검색 입력란과 버튼 사이 간격 */
  `;

  const SearchButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  `;

  let { data: companyData } = useQuery(["key1"], () => {
    //주기적으로 데이터 받아와서 표시(데이터 바뀌어도)
    return axios.get("/dummy/TestCompanies.json").then((res) => {
      return res.data;
    });
  });

  useEffect(() => {
    //메인 페이지에 접솔했을 때 처음 접속이면 빈 배열, 아니면 기존 배열 사용
    const recentlyViewedData = sessionStorage.getItem("recentlyViewed");
    if (!recentlyViewedData) {
      sessionStorage.setItem("recentlyViewed", JSON.stringify([]));
    }
  }, []);

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">WallStreet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/news">Page1</Nav.Link>
            <Nav.Link href="#pricing">Page2</Nav.Link>
            <Nav.Link href="#pricing">Page3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchContainer>
                <SearchBox>
                  <SearchInput type="text" placeholder="기업명을 입력하세요" />
                  <SearchButton>검색</SearchButton>
                </SearchBox>
              </SearchContainer>
              {/*비동기로 인해 변수가 넘어오지 않았을 때 오류 방지*/}
              {companyData && <MyWordcloud words={companyData} />}
            </div>
          }
        ></Route>
        <Route
          path="/news/:id"
          element={<News companyData={companyData} />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
