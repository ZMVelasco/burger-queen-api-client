import { useState, useEffect } from "react";
import { deleteProducts, editProducts, adminFetch, createProduct } from "../../fetch";
import AdminTable from "../globalcomponents/admintable";
import AdditionModal from "../globalcomponents/AdditionModal";

const Products = () => {

    const token = localStorage.getItem("token");
    const [tableData, setTableData] = useState([]);
    const productsTotal = tableData.length;
    const [formValues, setFormValues] = useState({
        name: '',
        type: '',
        price: '',
    });

    const handleInputChangeProducts = (event, name) => {
        const { value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const addProduct = () => {
        const { name, type, price } = formValues;
        createProduct(token, name, type, price)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log("Product created", response);
                refreshProductsEdit()
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleProductSubmit = (event) => {
        event.preventDefault();
        // You can access the form values in the formValues object.
        console.log(formValues);
    };

    const productFields = [
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Strawberry smoothie', autoFocus: true },
        { name: 'type', label: 'Type', type: 'text', placeholder: 'Breakfast', autoFocus: false },
        { name: 'price', label: 'Price', type: 'number', placeholder: '500', autoFocus: false },
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
            <AdditionModal endpoint="/products" endpointName="Products" itemTotal={productsTotal} inputFields={productFields} handleInputChange={handleInputChangeProducts} handleSubmit={handleProductSubmit} handleCreate={addProduct}/>
            <AdminTable endpoint="/products" firstProperty="price" secondProperty="type" handleEdit={handleProductsEdit} handleDelete={handleProductsDelete} saveCallback={requestEditProducts} dataList={tableData} />
        </div>
    );
}
export default Products;