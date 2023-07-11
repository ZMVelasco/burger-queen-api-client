import { useEffect, useState } from "react";
import { deleteEmployees, editEmployees, adminFetch } from "../../fetch";
import AdminTable from "../globalcomponents/admintable";
import AdditionModal from "../globalcomponents/AdditionModal";
const Employees = () => {

    const token = localStorage.getItem("token");
    const [tableData, setTableData] = useState([]);

    const handleEmployeesEdit = (id) => {
        console.log("Edit employee", id);
    }
    const handleEmployeesDelete = (itemId) => {
        deleteEmployees(token, itemId)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log('el id es', itemId);
                console.log('Employee delete', response);
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const requestEditEmployees = (token, id, name, role, email) => {
        editEmployees(token, id, name, role, email)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log("Employee modified", response);
                refreshEmployeesEdit()
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const refreshEmployeesEdit = () => {
        adminFetch(token, "/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log("response", response);
                return response.json();
            })
            .then((data) => {
                setTableData(data);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });
    }

    useEffect(() => {
        refreshEmployeesEdit()
    }, []);
    return (
        <div>
            <h1>Employees</h1>
            <AdditionModal endpoint="/users" endpointName="Employees" />
            <AdminTable endpoint="/users" firstProperty="role" secondProperty="email" handleEdit={handleEmployeesEdit} handleDelete={handleEmployeesDelete} saveCallback={requestEditEmployees} dataList={tableData} />
        </div>
    );
}
export default Employees;