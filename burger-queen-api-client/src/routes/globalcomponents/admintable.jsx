import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import("../admin/admin.css");

const AdminTable = ({
    endpoint,
    data,
    firstProperty,
    secondProperty,
    handleDelete,
    saveCallback,
    dataList,
}) => {
    const token = localStorage.getItem("token");

    // TODO: borrar estado si ya no hace falta
    const [isEditing, setIsEditing] = useState(null);

    const [show, setShow] = useState(false);
    const [editingItem, setEditingItem] = useState(() => {
        if (endpoint === "/products") {
            return {
                id: "",
                name: "",
                type: "",
                price: "",
            };
        } else {
            return {
                id: "",
                name: "",
                role: "",
                email: "",
            };
        }
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        const token = localStorage.getItem("token");
        const id = editingItem.id;
        const name = editingItem.name;
        const role = editingItem.role;
        const email = editingItem.email;
        const price = editingItem.price;
        const type = editingItem.type;

        if (endpoint === "/users") {
            saveCallback(token, id, name, role, email);
        } else {
            saveCallback(token, id, name, price, type);
        }
    };

    const handleEditClick = (item) => {
        setIsEditing(item.id);
        setEditingItem(item);
        handleShow();
    };

    const handleFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setEditingItem((prevState) => {
            return { ...prevState, [fieldName]: fieldValue };
        });
    };

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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item[firstProperty]}</td>
                            <td>{item[secondProperty]}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEditClick(item)}>
                                    <i className="bi bi-pencil-square"></i>
                                    EDIT
                                </Button>{" "}
                                <Button variant="warning" onClick={() => handleDelete(item.id)}>
                                    <i className="bi bi-trash3-fill"></i>DELETE
                                </Button>{" "}
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
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
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
                            {endpoint === "/products" ? (
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>{firstProperty}</Form.Label>
                                    <Form.Control
                                        name="price"
                                        type="text"
                                        placeholder="700"
                                        autoFocus
                                        value={editingItem.price}
                                        onChange={handleFieldChange}
                                    />
                                </Form.Group>
                            ) : (
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput2"
                                >
                                    <Form.Label>{firstProperty}</Form.Label>
                                    <Form.Control
                                        name="role"
                                        type="text"
                                        placeholder="Admin"
                                        autoFocus
                                        value={editingItem.role}
                                        onChange={handleFieldChange}
                                    />
                                </Form.Group>
                            )}
                            {endpoint === "/products" ? (
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control
                                        name="type"
                                        type="text"
                                        placeholder="Lunch and dinner"
                                        autoFocus
                                        value={editingItem.type}
                                        onChange={handleFieldChange}
                                    />
                                </Form.Group>
                            ) : (
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput2"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="example@mail.com"
                                        autoFocus
                                        value={editingItem.email}
                                        onChange={handleFieldChange}
                                    />
                                </Form.Group>
                            )}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </div>
    );
};

export default AdminTable;
