import "./news.css";
import React from "react";
import axios from "axios";
import BoxTemplate from "../components/box";
import NewsHead from "../components/newsHead";
import Companyinfo from "../components/company";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "styled-components";

function News(props) {
  const { id } = useParams();

  const PaginationBox = styled.div` //페이지네이션을 포함한 박스
  display : flex;
  flex-direction: column;
  `
  //const recentlyViewed =
  //JSON.parse(sessionStorage.getItem("recentlyViewed")) || [];
  //메인 페이지에 접솔했을 때 처음 접속이면 빈 배열, 아니면 기존 배열 사용

  // if (!recentlyViewed.includes(props.companyData[id].text)) {
  //   //중복 체크 로직. 추후 데이터 받아 와서 저장
  //   recentlyViewed.unshift(props.companyData[id].text);
  //   sessionStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  // }
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // 데이터를 비동기로 가져옵니다.
    async function fetchNewsData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/dummy/samsung.json"
        );
        //나중에 api 개발 된 뒤, App.js 의 companyData 에서 기업 이름을 가져와서 변수화 한 후 넣으면 될듯.
        console.log(response.data);
        setNewsData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNewsData(); // 데이터 가져오는 함수 호출
  }, []); // 빈 배열을 넣어 한 번만 호출되도록 설정

  //추후 여기에 useQuery 넣어서 각 기업 정보 페이지 별로 데이터 "하나만" 받아와서 출력되게 함.
  //props로 데이터 넘겨줘서 표시하게 할 것.
  //맨 처음에 XX 관련 페이지입니다. 표시해도 좋을듯.

  return (
    <div className="main">
      <PaginationBox>
      {/*props.companyData[id].url*/}
      <BoxTemplate>
        {newsData &&
          newsData.map((n) => {
            return <NewsHead key={n.toString()} newsData={n} id={n.id} />;
          })}
      </BoxTemplate>
      <div style={{display : "flex" ,justifyContent:"center"}}>
      <Stack spacing={5}>
        <Pagination count={5} color="primary"/>
        {/*page: 현재 페이지
count: 총 페이지 개수
onChange: 페이지네이션에서 왼쪽, 오른쪽 화살표나 다른 페이지를 눌렀을 때 발생하는 함수
sx: 스타일을 정의
size: 전체적인 크기를 설정
renderItem: 페이지네이션 안을 직접 설정하고자 할 때 사용
https://flykimjiwon.tistory.com/112 */}
      </Stack>
      </div>
      </PaginationBox>
      <BoxTemplate>
        <Companyinfo />
      </BoxTemplate>
    </div>
  );
}

export default News;
