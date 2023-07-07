import AdminTable from "../globalcomponents/admintable";
const Employees = () => {
    return (
        <div>
        <h1>Employees</h1>
        <AdminTable endpoint="/users" firstProperty="role" secondProperty="email" thirdProperty="password"/>
        </div>
    );
}
export default Employees;