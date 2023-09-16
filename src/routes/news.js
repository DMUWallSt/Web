import "./news.css";
import React from "react";
import BoxTemplate from "../components/box";
import NewsHead from "../components/newsHead";
import Componyinfo from "../components/compony";

function News() {
  return (
    <div class="main">
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
