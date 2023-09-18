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
function App() {
  const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
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
  const [companyName, setCompanyName] = useState([
    { text: "AAAAAA", value: 1, url: "/" },
    { text: "삼성생명2", value: 3, url: "/" },
    { text: "삼성생명3", value: 5, url: "/" },
    { text: "삼성생명4", value: 7, url: "/" },
    { text: "삼성생명5", value: 9, url: "/" },
    { text: "삼성생명6", value: 11, url: "/" },
    { text: "삼성생명7", value: 13, url: "/" },
    { text: "삼성생명8", value: 15, url: "/" },
    { text: "삼성생명9", value: 17, url: "/" },
    { text: "삼성생명10", value: 19, url: "/news" },
  ]);

  const sortedCompanyName = [...companyName].sort((a, b) => {
    return a.score - b.score;
  });

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

              <MyWordcloud words={companyName} />
            </div>
          }
        ></Route>
        <Route path="/news/:id" element={<News />}></Route>
      </Routes>
    </div>
  );
}
export default App;
