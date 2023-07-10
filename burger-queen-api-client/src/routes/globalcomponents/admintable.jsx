import { adminFetch } from "../../fetch";
import { useEffect, useState } from "react";
import {Table, Button }from 'react-bootstrap';
import('../admin/admin.css');


const AdminTable = ({ endpoint, data, firstProperty, secondProperty, thirdProperty, showThirdProperty, handleDelete, handleEdit }) => {
    const token = localStorage.getItem("token");
    const [tableData, setTableData] = useState([]);

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

    return (
        <div>
            <h1>AdminTable</h1>
            <Table striped bordered hover variant="dark" style={{width:"80%"}}>
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
                            onClick={() => handleEdit(item.id)}> 
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
        </div>
    );
};

export default AdminTable;