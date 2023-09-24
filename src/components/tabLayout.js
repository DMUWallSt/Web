import styled from "styled-components";

function TabLayout(props) {
  const TabMenuDiv = styled.div`
    background-color: rgb(13, 110, 253);
    //rgb(13, 110, 253); 파랑
    //rgb(33, 37, 41); 검정
    color: white; /* 글자색을 검정색으로 변경 */
    text-align: center;
    font-family: "Noto";
    font-weight: 100;
    border: 3px solid white; /* 테두리를 검정색 2px 두께로 설정 */
    border-radius: 20px;
    margin-left: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 테두리 그림자 추가 */
    padding: 10px;
  `;

  const TabElementDiv = styled.div`
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      color: lightblue;
    }
  `;

  const testArr = ["economy", "politics", "test", "탭4", "탭5"];

  return (
    <TabMenuDiv>
      <h5 style={{ marginTop: "10px" }}>탭 메뉴</h5>
      {testArr.map((n) => {
        return (
          <TabElementDiv
            key={n}
            onClick={() => {
              props.setTabState(n);
            }}
          >
            {n}
          </TabElementDiv>
        );
      })}
    </TabMenuDiv>
  );
}

export default TabLayout;
