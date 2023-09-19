import "./news.css";
import React from "react";
import BoxTemplate from "../components/box";
import NewsHead from "../components/newsHead";
import Componyinfo from "../components/compony";
import { useParams } from "react-router-dom";

function News(props) {
  const { id } = useParams();

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
