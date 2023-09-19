import "./news.css";
import React from "react";
import BoxTemplate from "../components/box";
import NewsHead from "../components/newsHead";
import Componyinfo from "../components/compony";
import { useParams } from "react-router-dom";

function News(props) {
  const { id } = useParams();

  const recentlyViewed = JSON.parse(sessionStorage.getItem('recentlyViewed')) || [];

// Check if the 'id' is not in the 'recentlyViewed' array
if (!recentlyViewed.includes(props.companyData[id].text)) {
  recentlyViewed.push(props.companyData[id].text);
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
