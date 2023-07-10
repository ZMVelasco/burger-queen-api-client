import AdminTable from "../globalcomponents/admintable";
const Products = () => {

    const handleProductsEdit = (id) => {
        console.log("Edit product", id);
    }
    const handleProductsDelete = (id) => {
        console.log("Delete product", id);
    }

    return (
        <div>
        <h1>Products</h1>
        <AdminTable endpoint="/products" firstProperty="price" secondProperty="type" thirdProperty={null} showThirdProperty={false} handleEdit={handleProductsEdit} handleDelete={handleProductsDelete}/>
        </div>
    );
}
export default Products;