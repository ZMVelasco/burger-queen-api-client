import { useState, useEffect } from "react";
import { deleteProducts, editProducts, adminFetch } from "../../fetch";
import AdminTable from "../globalcomponents/admintable";
import AdditionModal from "../globalcomponents/AdditionModal";

const Products = () => {

    const token = localStorage.getItem("token");
    const [tableData, setTableData] = useState([]);
    const productsTotal = tableData.length;

    const productFields = [
        { id: 'name', label: 'Name', type: 'text', placeholder: 'Strawberry smoothie', autoFocus: true },
        { id: 'type', label: 'Type', type: 'text', placeholder: 'Breakfast', autoFocus: false },
        { id: 'price', label: 'Price', type: 'number', placeholder: '500', autoFocus: false },
    ];

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

    const requestEditProducts = (token, id, name, price, type) => {
        editProducts(token, id, name, price, type)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log("Product modified", response);
                refreshProductsEdit()
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const refreshProductsEdit = () => {
        adminFetch(token, "/products")
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
        refreshProductsEdit()
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <AdditionModal endpoint="/products" endpointName="Products" itemTotal={productsTotal} inputFields={productFields} />
            <AdminTable endpoint="/products" firstProperty="price" secondProperty="type" handleEdit={handleProductsEdit} handleDelete={handleProductsDelete} saveCallback={requestEditProducts} dataList={tableData} />
        </div>
    );
}
export default Products;