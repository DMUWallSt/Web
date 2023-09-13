import BoxTemplate from "../components/box";
import NewsHead from "../components/newsHead";
import Componyinfo from "../components/compony";

function News() {
  return (
    <div style={{ display: "flex" }}>
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
