import '../css/ProductForm.css';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'

const ProductForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        subtitle: '',
        description: '',
        price: '',
        quantity: '',
        img: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
    });

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/addproducts', formData);
            console.log('Product added:', response.data);
            setFormData({
                id: '',
                title: '',
                subtitle: '',
                description: '',
                price: '',
                quantity: '',
                img: '',
                img1: '',
                img2: '',
                img3: '',
                img4: '',
            });
            setNotification('Product added successfully');
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='form-center'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex">
                        <label>
                            <input
                                required
                                type="number"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder=""
                                className="input"
                            />
                            <span>ID</span>
                        </label>

                        <label>
                            <input
                                required
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder=""
                                className="input"
                            />
                            <span>Title</span>
                        </label>
                    </div>

                    <label>
                        <input
                            required
                            type="text"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Subtitle</span>
                    </label>

                    <label>
                        <input
                            required
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Description</span>
                    </label>
                    <label>
                        <input
                            required
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Price</span>
                    </label>
                    <label>
                        <input
                            required
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Quantity</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Main Photo</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img1"
                            value={formData.img1}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 1</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img2"
                            value={formData.img2}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 2</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img3"
                            value={formData.img3}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 3</span>
                    </label>
                    <label>
                        <input
                            required
                            type="text"
                            name="img4"
                            value={formData.img4}
                            onChange={handleChange}
                            placeholder=""
                            className="input"
                        />
                        <span>Photo 4</span>
                    </label>

                    <button className="fancy" type="submit">
                        <span className="top-key"></span>
                        <span className="text">Add Product</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </form>
                <div className={`notification${notification ? '' : ' hide'}`}>
                    {notification}
                </div>
            </div>
        </div>
    );
};

export default ProductForm;