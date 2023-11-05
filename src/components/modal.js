import React from "react";
import Modal from "react-modal";
import "./modal.css";
import exitbtn from "./exit.png";

Modal.setAppElement("#root"); // 모달이 화면에 렌더링될 DOM 요소를 설정

function ModalComponent(props) {

 
//  const Line = props.content.split('.').map((sentence, index, array) => {
//   const hasDotAndNumber = /(\d+(\.\d+)?\%)|(\d+\.\d+)/.test(sentence);
  
//   return (
//     <span key={index}>
//       {sentence.trim()}
//       {index !== array.length - 1 && !hasDotAndNumber && (
//         <>
//           .<br /><br />
//         </>
//       )}
//     </span>
//   );
// });

  const customStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "1600px",
      height: "900px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
      borderRadius: "40px",
      backgroundColor: "#e8e3e3"
    },
  };
  return (
    <Modal
      isOpen={props.isOpen} // 모달이 열려 있는지 여부를 결정하는 prop
      onRequestClose={props.onRequestClose}
      style={customStyles} // 모달 닫기 요청 시 호출되는 콜백
    >
      <div className="modal-wrapper">
        <h3 className="title">{props.title}</h3>
        <div className="info">
          <p className="newscom">{props.newscom}</p>
          <p className="date">{props.date}</p>
        </div>
        <div className="content">
          <img className="img" src={props.img}></img>
          <p className="news">{props.content}</p>
        </div>
        <button className="closeBtn" onClick={props.onRequestClose}>
          <img src={exitbtn} alt="닫기 버튼" />
        </button>
      </div>
    </Modal>
  );
}

export default ModalComponent;
