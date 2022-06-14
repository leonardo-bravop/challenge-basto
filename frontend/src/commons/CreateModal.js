import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import updateAnimal from "../services/updateAnimal";
import AnimalForm from "./AnimalForm";

const CreateModal = ({ setResults, active }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  // const handleUpdate = () => {
  //   updateAnimal(result._id, setResults);
  //   setShow(false);
  // };

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          handleShow();
        }}
      >
        Crear
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AnimalForm setResults={setResults} create={true} active={active} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateModal;
