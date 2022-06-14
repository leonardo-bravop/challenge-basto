import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import updateAnimal from "../services/updateAnimal";
import AnimalForm from "./AnimalForm";

const EditModal = ({ result, setResults, active }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          handleShow();
        }}
        style={{ margin: "0 5px" }}
      >
        Editar
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AnimalForm
            result={result}
            setResults={setResults}
            update={true}
            active={active}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
