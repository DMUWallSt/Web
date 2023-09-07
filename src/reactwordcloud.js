import ReactWordcloud from "react-wordcloud";
import { useNavigate } from "react-router-dom";

function MyWordcloud(props) {
  const navi = useNavigate();
  const words = props.words;
  console.log(words);
  const callbacks = {
    getWordColor: (word) => (word.value > 10 ? "red" : "blue"),
    onWordClick: (word) => navi(word.url),
    onWordMouseOver: console.log,
    getWordTooltip: (word) => `${word.value}`,
  };
  const options = {
    rotations: 1,
    rotationAngles: [0, 0],
    fontSizes: [5, 100],
  };
  const size = [600, 400];

  return (
    <div style={{ marginLeft: "500px" }}>
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        minSize={[1000, 500]}
        words={words}
      />
    </div>
  );
}

export default MyWordcloud;
