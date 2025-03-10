import { useEffect, useState } from "react";
import {
    deleteEmployees,
    editEmployees,
    adminFetch,
    createEmployee,
} from "../../fetch";
import AdminTable from "../globalcomponents/admintable";
import AdditionModal from "../globalcomponents/AdditionModal";

const Employees = () => {
    const token = localStorage.getItem("token");
    const [tableData, setTableData] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);

    const employeeTotal = tableData.length;

    const [formValues, setFormValues] = useState({
        name: "",
        role: "",
        email: "",
        password: "",
    });

    const handleInputChangeEmployees = (event, name) => {
        const { value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        console.log([name]);
    };

    const addEmployee = () => {
        const { name, role, email, password } = formValues;
        createEmployee(token, name, role, email, password)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log("Employee created", response);
                refreshEmployeesEdit();
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleEmployeeSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    const handleEmployeesEdit = (id) => {
        console.log("Edit employee", id);
    };

    const employeeFields = [
        {
            name: "name",
            label: "Name",
            type: "text",
            placeholder: "Jane Doe",
            autoFocus: true,
        },
        {
            name: "role",
            label: "Role",
            type: "text",
            placeholder: "waiter",
            autoFocus: false,
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "janedoe@mail.com",
            autoFocus: false,
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "opensesame123",
            autoFocus: false,
        },
    ];

    const handleEmployeesDelete = (itemId) => {
        deleteEmployees(token, itemId)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log("Employee delete", response);
                refreshEmployeesEdit();
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const requestEditEmployees = (token, id, name, role, email) => {
        editEmployees(token, id, name, role, email)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log("Employee modified", response);
                refreshEmployeesEdit();
                setShowEditModal(false);
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
    };

    useEffect(() => {
        refreshEmployeesEdit();
    }, []);
    return (
        <div>
            <AdditionModal
                endpoint="/users"
                endpointName="Employees"
                itemTotal={employeeTotal}
                inputFields={employeeFields}
                handleInputChange={handleInputChangeEmployees}
                handleSubmit={handleEmployeeSubmit}
                handleCreate={addEmployee}
            />
            <AdminTable
                endpoint="/users"
                firstProperty="role"
                secondProperty="email"
                handleEdit={handleEmployeesEdit}
                handleDelete={handleEmployeesDelete}
                saveCallback={requestEditEmployees}
                dataList={tableData}
                showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
            />
        </div>
    );
};
export default Employees;
