import React from "react";
import styled from "styled-components";


const BoxBlock = styled.div`
  width: 900px;

  position: relative;
  background: #edede9;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Gyeonggi-Batang";
`;

function BoxTemplate({ children }) {
  return <BoxBlock>{children}</BoxBlock>;
}

export default BoxTemplate;
