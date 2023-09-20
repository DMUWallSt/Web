import "./news.css";
import React from "react";
import BoxTemplate from "../components/box";
import NewsHead from "../components/newsHead";
import Componyinfo from "../components/compony";
import { useParams } from "react-router-dom";

function News(props) {
  const { id } = useParams();

  const recentlyViewed = JSON.parse(sessionStorage.getItem('recentlyViewed')) || [];
  //메인 페이지에 접솔했을 때 처음 접속이면 빈 배열, 아니면 기존 배열 사용

  if (!recentlyViewed.includes(props.companyData[id].text)) { //중복 체크 로직
    recentlyViewed.unshift(props.companyData[id].text);
    sessionStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }

  return (
    <div class="main">
      {/*props.companyData[id].url*/}
      <BoxTemplate>
        <NewsHead />
        <NewsHead />
      </BoxTemplate>
      <BoxTemplate>
        <Componyinfo />
      </BoxTemplate>
    </div>
  );
}

export default News;
