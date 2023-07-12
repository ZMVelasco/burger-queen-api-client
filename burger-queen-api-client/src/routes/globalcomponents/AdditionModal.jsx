import React from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { adminFetch } from '../../fetch';

const AdditionModal = ({ endpoint, endpointName, itemTotal, inputFields }) => {
    const [show, setShow] = useState(false);
    const token = localStorage.getItem("token");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        adminFetch(token, endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const usersLength = response.length;
                console.log(usersLength); // Outputs the length of the users array
                console.log("response", response);
                return response.json();
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });
    }, [token, endpoint]);

    return (
        <section className='addition-modal' style={{ display: "flex", alignItems: "center", justifyContent:"center", marginBottom:"5%" }}>
            <Card style={{ width: '12rem', height:"8rem" }}>
                <Card.Body>
                    <Card.Title style={{color: "white", fontWeight:"600"}}>Total {endpointName}</Card.Title>
                    <Card.Text >
                        {itemTotal} {endpointName}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '12rem', height:"8rem", marginLeft: "4%"}}>
                <Card.Body>
                    <Card.Title style={{color: "white", fontWeight:"600"}}>Add {endpointName}</Card.Title>
                    <Button variant="primary" onClick={handleShow} style={{backgroundColor:"#00A86B", border: "1px solid #00A86B", width: "40%", marginLeft: "60%"}}>
                        <i className="bi bi-plus-square-fill" style={{backgroundColor:"transparent", fontSize:"1.5rem"}}></i>
                    </Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{`Add new ${endpointName}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {inputFields.map((field) => (
                            <Form.Group className="mb-3" controlId={field.id} key={field.id}>
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    autoFocus={field.autoFocus}
                                />
                            </Form.Group>
                        ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default AdditionModal