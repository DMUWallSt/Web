import ReactWordcloud from "react-wordcloud";
import { useNavigate } from "react-router-dom";

function MyWordcloud(props) {
  const size = [1100, 600];
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
