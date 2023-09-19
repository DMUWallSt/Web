import ReactWordcloud from "react-wordcloud";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RecentlyVisitedCompanies from "./components/RecentlyViewedCompanies";

function MyWordcloud(props) {
  const WordCloudDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

  const size = [1100, 500];
  const navi = useNavigate();
  const words = props.words;
  const callbacks = {
    getWordColor: (word) => (word.value > 10 ? "red" : "blue"),
    onWordClick: (word) => navi(word.url),
    getWordTooltip: (word) => `${word.value}`,
  };
  const options = {
    rotations: 1,
    fontFamily: "TTTogether",
    rotationAngles: [0, 0],
    fontSizes: [30, 150],
    enableTooltip: false,
  };

  return (
    <WordCloudDiv>
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        minSize={[1000, 500]}
        words={words}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "70vh",
          marginLeft: "300px",
        }}
      />
      <RecentlyVisitedCompanies />
    </WordCloudDiv>
  );
}

export default MyWordcloud;
