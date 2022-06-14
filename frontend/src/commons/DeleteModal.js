import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import deleteAnimal from "../services/deleteAnimal";

const DeleteModal = ({ setResults, searchValue, _id, active }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleDelete = () => {
    deleteAnimal(setResults, searchValue, _id, active);
    setShow(false);
  };
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleShow();
        }}
        style={{ margin: "0 5px" }}
      >
        Eliminar
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar borrar registro?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Cancelar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete();
            }}
          >
            Confirmar eliminar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
