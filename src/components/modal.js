import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달이 화면에 렌더링될 DOM 요소를 설정

function ModalComponent(props) {
  return (
    <Modal
      isOpen={props.isOpen} // 모달이 열려 있는지 여부를 결정하는 prop
      onRequestClose={props.onRequestClose} // 모달 닫기 요청 시 호출되는 콜백
    >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={props.onRequestClose}>닫기</button>
    </Modal>
  );
}

export default ModalComponent;
