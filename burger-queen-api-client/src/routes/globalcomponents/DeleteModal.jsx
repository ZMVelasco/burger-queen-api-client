import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import("../admin/admin.css");

const DeleteModal = ({ showDeleteModal, setShowDeleteModal, handleDelete, item }) => {
  // const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{backgroundColor:"none", display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
          <i className="bi bi-exclamation-circle" style={{color:"#ff4d4d", fontSize:"40px"}}></i>
          <h4 style={{color:"white", textAlign:"center"}}>Are you sure you want to delete this item?</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{backgroundColor:"#ff4d4d", borderColor:"#ff4d4d"}}
            id="confirm-delete-button"
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
