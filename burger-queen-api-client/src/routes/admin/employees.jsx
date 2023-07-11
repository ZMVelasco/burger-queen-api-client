import { deleteEmployees } from "../../fetch";
import AdminTable from "../globalcomponents/admintable";
import AdditionModal from "../globalcomponents/AdditionModal";
const Employees = () => {

    const handleEmployeesEdit = (id) => {
        console.log("Edit employee", id);
    }
    const handleEmployeesDelete = (itemId) => {
        const token = localStorage.getItem("token");
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

    return (
        <div>
        <h1>Employees</h1>
        <AdditionModal endpoint="/users" endpointName="Employees"/>
        <AdminTable endpoint="/users" firstProperty="role" secondProperty="email" handleEdit={handleEmployeesEdit} handleDelete={handleEmployeesDelete}/>
        </div>
    );
}
export default Employees;