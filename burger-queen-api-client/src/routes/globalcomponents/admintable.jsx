import { adminFetch } from "../../fetch";
import { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from 'react-bootstrap';
import('../admin/admin.css');
// import ReactDOM from "react-dom";
import GlobalModal from "./Modal";

const AdminTable = ({ endpoint, data, firstProperty, secondProperty, thirdProperty, showThirdProperty, handleDelete }) => {
    const token = localStorage.getItem("token");
    const [tableData, setTableData] = useState([]);
   
    // TODO: borrar estado si ya no hace falta
    const [isEditing, setIsEditing] = useState(null);

    const [show, setShow] = useState(false);
    const [editingItem, setEditingItem] = useState({
        "email": "",
        "password": "",
        "name": "",
        "role": "",
        "id": ""
      });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        adminFetch(token, endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log('response', response);
                return response.json();
            })
            .then((data) => {
                setTableData(data);
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    }, [token, endpoint, data]);

    const handleEditClick = (item) => {
        setIsEditing(item.id); 
        setEditingItem(item)
        handleShow();
    };

    const handleFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setEditingItem((prevState) => {
            return {...prevState, [fieldName]: fieldValue}
        })
    }


    return (
        <div>
            <h1>AdminTable</h1>
            <Table striped bordered hover variant="dark" style={{ width: "80%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>{firstProperty}</th>
                        <th>{secondProperty}</th>
                        {showThirdProperty && (<th>{thirdProperty}</th>)}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item[firstProperty]}</td>
                            <td>{item[secondProperty]}</td>
                            {showThirdProperty && (<td>{item[thirdProperty] === undefined ? "" : "******"}</td>)}
                            <td>
                                <Button variant="warning"
                                    onClick={() => handleEditClick(item)}>
                                    <i className="bi bi-pencil-square"></i>
                                    EDIT</Button>{' '}
                                <Button variant="warning"
                                    onClick={() => handleDelete(item.id)}>
                                    <i className="bi bi-trash3-fill"></i>DELETE</Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="Name"
                                autoFocus
                                value={editingItem.name}
                                onChange={handleFieldChange}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{firstProperty}</Form.Label>
                            <Form.Control
                                 name="email"
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                value={editingItem.email}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>{secondProperty}</Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>{thirdProperty}</Form.Label>
                            <Form.Control as="textarea" rows={1} />
                        </Form.Group>
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
        </div>
    );
};

export default AdminTable;