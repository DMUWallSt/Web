import ReactWordcloud from "react-wordcloud";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RecentlyVisitedCompanies from "./components/RecentlyViewedCompanies";
import TabLayout from "./components/tabLayout";

function MyWordcloud(props) {
  console.log(props);
  const WordCloudDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

  const size = [1100, 500];
  const navi = useNavigate();
  let words = props.words;
  console.log(words);
  const callbacks = {
    getWordColor: (word) => (word.ratio > 0 ? "red" : "blue"),
    onWordClick: (word) => navi(word.url),
    getWordTooltip: (word) => `${word.value}`,
  };
  const options = {
    rotations: 1,
    fontFamily: "Noto",
    rotationAngles: [0, 0],
    fontSizes: [30, 150],
    enableTooltip: false,
  };

  return (
    <WordCloudDiv>
      <TabLayout setTabState={props.setTabState} refetch={props.refetch} />
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        minSize={[1000, 500]}
        words={words}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
        }}
      />
      <RecentlyVisitedCompanies companyData={props.words} />
    </WordCloudDiv>
  );
}

export default MyWordcloud;
