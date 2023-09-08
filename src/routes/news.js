import BoxTemplate from "./box";

function News() {
  return (
    <div style={{display: 'flex'}}>
      {<BoxTemplate>뉴스페이지</BoxTemplate>}
      {<BoxTemplate>정보페이지</BoxTemplate>}
    </div>
  );
}

export default News;
