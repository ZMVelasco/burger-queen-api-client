import { deleteProducts } from "../../fetch";
import AdminTable from "../globalcomponents/admintable";
const Products = () => {

    const handleProductsEdit = (id) => {
        console.log("Edit product", id);
    }
    const handleProductsDelete = (itemId) => {
        const token = localStorage.getItem("token");
        deleteProducts(token, itemId) 
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            console.log('el id es', itemId);
            console.log('Order delete', response);
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
        <h1>Products</h1>
        <AdminTable endpoint="/products" firstProperty="price" secondProperty="type" thirdProperty={null} showThirdProperty={false} handleEdit={handleProductsEdit} handleDelete={handleProductsDelete}/>
        </div>
    );
}
export default Products;