import { adminFetch } from "../../fetch";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const AdminTable = ({ endpoint, data, firstProperty, secondProperty, thirdProperty }) => {
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
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>{firstProperty}</th>
                        <th>{secondProperty}</th>
                        <th>{thirdProperty}</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item[firstProperty]}</td>
                            <td>{item[secondProperty]}</td>
                            <td>{item[thirdProperty]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminTable;