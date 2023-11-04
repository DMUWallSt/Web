import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import News from "./routes/news";
import { useState, useEffect, useRef } from "react";
import MyWordcloud from "./reactwordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
  const navi = useNavigate();

  const search = (corpName) => {
    console.log(corpName);
    navi(`/news/${corpName}`);
  };

  const BackGround = styled.div`
    display: flex;
    justify-content: center;
    min-width: 100vh;
    height: 100vh;
    background-color: #0c1229;
    margin: 0;
    font-family: "NOTO";
    color: white;
  `;

  const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    height: 100vh;
    //background-color: white;
  `;

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
    border: 3px solid rgb(13, 110, 253); /* 테두리를 검정색 2px 두께로 설정 */
    border-radius: 5px;
    margin-right: 10px; /* 검색 입력란과 버튼 사이 간격 */
  `;

  const SearchButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    //#007bff;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "NOTO";

    &:hover {
      background-color: #0056b3;
    }
  `;

  const SearchForm = styled.form`
    display: flex;
  `;

  const [tabState, setTabState] = useState("economy");
  const searchComp = useRef(null);

  //1. 워드클라우드에서 데이터를 받아 표시해주는 형태
  //2. 데이터를 useQuery로 실시간 업데이트 중
  //3. ~~~~/ecomony 이렇게 되어 있으면 탭마다 고유의 값을 주고, 해당 탭을 클릭하면 props 로 전송된 setTab 함수를 실행시켜서  App.js 의 tab state를 변경시킴
  //4. 그럼 useQuery([key], fetch(~~~/${tab}).then()~~ 이게 변경되면서 다른 워드클라우드가 나오게 된다.
  const { data: companyData, refetch } = useQuery(
    ["key1"],
    () => {
      return axios.get(`http://localhost:3001/wordCloud`).then((res) => {
        const Values = [30, 20, 10, 5, 30, 20, 10, 5];

        const wordCloudData = res.data.map((item, index) => ({
          value: Values[index],
          text: item.NAME,
          url: "/news/" + item.NAME,
          ratio: item.ratio,
        }));
        return wordCloudData;
      });
    },
    {
      onSuccess: () => {},
    }
  );

  useEffect(() => {
    refetch();
  }, [tabState]);

  useEffect(() => {
    //메인 페이지에 접솔했을 때 처음 접속이면 빈 배열, 아니면 기존 배열 사용
    const recentlyViewedData = sessionStorage.getItem("recentlyViewed");
    if (!recentlyViewedData) {
      sessionStorage.setItem("recentlyViewed", JSON.stringify([]));
    }
  }, []);

  return (
    <BackGround>
      <ContentDiv
        style={{
          backgroundColor: "#0c1229",
          marginLeft: 0,
          //marginRight: "auto",
        }}
      >
        <Navbar data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/" style={{ color: "#F35A97" }}>
              WallSt
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchContainer>
                  <SearchBox>
                    <SearchInput
                      type="text"
                      placeholder="기업명을 입력하세요"
                      ref={searchComp}
                    />
                    <SearchForm>
                      <SearchButton
                        type="submit"
                        onClick={() => {
                          {
                            const searchValue = searchComp.current?.value;
                            search(searchValue);
                          }
                        }}
                      >
                        검색
                      </SearchButton>
                    </SearchForm>
                  </SearchBox>
                </SearchContainer>
                {/*비동기로 인해 변수가 넘어오지 않았을 때 오류 방지*/}
                {companyData && (
                  <MyWordcloud words={companyData} setTabState={setTabState} />
                )}
              </div>
            }
          ></Route>
          <Route
            path="/news/:companyName"
            element={<News companyData={companyData} />}
          ></Route>
        </Routes>
      </ContentDiv>
    </BackGround>
  );
}
export default App;
