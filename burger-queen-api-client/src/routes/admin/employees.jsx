import AdminTable from "../globalcomponents/admintable";
const Employees = () => {

    const handleEmployeesEdit = (id) => {
        console.log("Edit employee", id);
    }
    const handleEmployeesDelete = (id) => {
        console.log("Delete employee", id);
    }

    return (
        <div>
        <h1>Employees</h1>
        <AdminTable endpoint="/users" firstProperty="role" secondProperty="email" thirdProperty="password"  showThirdProperty={true} handleEdit={handleEmployeesEdit} handleDelete={handleEmployeesDelete}/>
        </div>
    );
}
export default Employees;