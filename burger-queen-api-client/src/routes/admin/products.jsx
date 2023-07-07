import AdminTable from "../globalcomponents/admintable";
const Products = () => {
    return (
        <div>
        <h1>Products</h1>
        <AdminTable endpoint="/products" firstProperty="price" secondProperty="type" thirdProperty={null} showThirdProperty={false}  />
        </div>
    );
}
export default Products;