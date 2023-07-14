import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = ({ showDeleteModal, setShowDeleteModal, handleDelete }) => {
  // const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{backgroundColor:"none"}}>
          <i className="bi bi-exclamation-circle" style={{color:"#ff4d4d", marginLeft:"21vh", fontSize:"40px"}}></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:"center", fontSize:"20px"}}>are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{backgroundColor:"#ff4d4d", borderColor:"#ff4d4d"}}
            onClick={() => {
              setShowDeleteModal(false);
              handleDelete(item.id);
            }}
          >
           Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
