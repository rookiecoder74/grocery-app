import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Cards';
import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';
import '../css/dbview.css';
import ProductCard from '../components/ProductCard';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(`http://localhost:4000/api/products?q=${query}`);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        if (query.length === 0 || query.length > 2) fetchProducts();
    }, [query]);
    return (
        <div>
            <Navbar />
            <BottomNavbar />
            <div className='marketplace-container'>
                <input
                    className="search"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <h1 className='dbviewh1'>Market Place</h1>
                <div className="grid-container">
                    {products.filter(user => user.title.includes(query)).map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;