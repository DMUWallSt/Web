import ReactWordcloud from "react-wordcloud";
import { useNavigate } from "react-router-dom";

function MyWordcloud(props) {
  const size = [600, 400];
  const navi = useNavigate();
  const words = props.words;
  console.log(words);
  const callbacks = {
    getWordColor: (word) => (word.value > 10 ? "red" : "blue"),
    onWordClick: (word) => navi(word.url),
    getWordTooltip: (word) => `${word.value}`,
  };
  const options = {
    rotations: 1,
    rotationAngles: [0, 0],
    fontSizes: [5, 100],
    enableTooltip: false,
    fontFamily: "GangwonEduPowerExtraBoldA",
  };

  return (
    <div>
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
          height: "100vh",
        }}
      />
    </div>
  );
}

export default MyWordcloud;
