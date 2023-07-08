import React from "react";
import "../components/css-components/modalConfirm.css";
const ModalConfirm = ({ setOpenModal, action }) => {
  const closeModal = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modalBackground" onClick={() => setOpenModal(false)}>
      <div className="modalContainer" onClick={closeModal}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>¿Estás segur@?</h1>
        </div>
        <div className="body">
          <p>Si eliminas este artículo no podrás recuperarlo</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancelar
          </button>
          <button onClick={action}>Sí, eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
