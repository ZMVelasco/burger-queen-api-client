import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import DeleteModal from "./DeleteModal";
import("../admin/admin.css");


const AdminTable = ({
    endpoint,
    firstProperty,
    secondProperty,
    handleDelete,
    saveCallback,
    dataList,
    showEditModal,
    setShowEditModal
}) => {
    const token = localStorage.getItem("token");

    // TODO: borrar estado si ya no hace falta
    const [isEditing, setIsEditing] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState({});
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
        setShowEditModal(true)
    };

    const handleFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setEditingItem((prevState) => {
            return { ...prevState, [fieldName]: fieldValue };
        });
    };

    return (
        < div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
        <section style={{display:"flex", justifyContent:"center", maxHeight:"60vh", width:"100%", overflow:"scroll"}}>
            <Table striped bordered hover variant="dark" style={{ width: "80%"}}>
                <thead >
                    <tr style={{ fontSize:"20px"}}>
                        <th>ID</th>
                        <th >Name</th>
                        <th>{firstProperty}</th>
                        <th>{secondProperty}</th>
                        <th style={{paddingLeft: "13%", width: "35%"}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((item, index) => (
                        <tr style={{ fontSize:"18px"}} key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item[firstProperty]}</td>
                            <td>{item[secondProperty]}</td>
                            <td>
                                <Button style={{ width: "33%", marginLeft: "16%" }}variant="warning" onClick={() => handleEditClick(item)} id="edit-admin-table">
                                    <i className="bi bi-pencil-square" style={{backgroundColor: "#FFC107", color:"black", marginRight:"6%"}}></i>
                                    EDIT
                                </Button>{" "}
                                <Button id="delete-admin-table" style={{backgroundColor: "#eb4d4b", borderColor: "#eb4d4b", color:"white", width: "40%"}}variant="warning" onClick={() => {setShowDeleteModal(true) 
                                setItemToDelete(item)}}>
                                    <i className="bi bi-trash3-fill" style={{backgroundColor: "#eb4d4b", color:"white", marginRight:"6%"}}></i>DELETE
                                </Button>{" "}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </section>
            <section>
                <Modal show={showEditModal} onHide={()=>setShowEditModal(false)}>
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
                        <Button variant="secondary" onClick={()=>setShowEditModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
            <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} handleDelete={handleDelete} item={itemToDelete}></DeleteModal>
        </div>
    );
};

export default AdminTable;
