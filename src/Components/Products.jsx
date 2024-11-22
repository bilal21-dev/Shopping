import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { useAuth } from './AuthContext';
import { FaHeart } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";

const Products = ({ item }) => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    const { login, addToCart, addToProfile, cartProducts, setCartProducts, setCount, count } = useAuth();
    const [message, setMessage] = useState(false);

    const handleClick = (product) => {
        if (login) {
            addToCart(product);
            setCount(count + 1);
            setCartProducts([...cartProducts, product.id]);
        } else {
            setMessage(true);
        }
    };

    const handleClick2 = (product) => {
        if (login) {
            addToProfile(product);
            alert("Product added to profile");
        } else {
            setMessage(true);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=100');
            const data = response.data;
            setProducts(data.products);
            setLoad(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchSpecificProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${item}`);
            const data = response.data;
            setProducts(data.products);
            setLoad(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        if (item) {
            fetchSpecificProduct();
        } else {
            fetchProducts();
        }
    }, [item]);

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="relative flex flex-wrap lg:flex-nowrap gap-6 p-6">
            {/* Categories Sidebar */}
            <div className="bg-blue-500 lg:fixed left-4 top-[140px] w-full lg:w-[200px] h-auto lg:h-[340px] rounded-md px-3 py-4 text-white flex flex-col gap-5 shadow-lg">
                <h1 className="font-bold text-xl">Categories</h1>
                <ul className="text-md space-y-2">
                    <li>Men's Outfit</li>
                    <li>Women's Outfit</li>
                    <li>Electronics</li>
                    <li>Cosmetics</li>
                    <li>Men's Outfit</li>
                </ul>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:ml-[215px] gap-6 w-full">
                {load ? (
                    <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
                        <div className="loader border-t-4 border-red-700 rounded-full w-16 h-16 animate-spin"></div>
                        <p className="ml-1 text-lg font-semibold text-white">Loading products...</p>
                    </div>
                ) : (
                    products.map(product => (
                        <div
                            key={product.id}
                            className="border p-4 bg-slate-200 rounded-lg hover:scale-105 transition duration-300 ease-in-out hover:border-black relative"
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-40 sm:h-48 w-full object-contain mb-4"
                            />
                            <h3 className="text-base sm:text-lg font-bold">{product.title}</h3>
                            <p className="text-sm sm:text-lg font-semibold">${product.price}</p>
                            {cartProducts.includes(product.id) && (
                                <p className="text-green-600 text-sm font-bold">
                                    Added to Cart <MdFileDownloadDone />
                                </p>
                            )}

                            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col gap-5 justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
                                <p className="text-xs sm:text-sm text-white text-center">{product.description}</p>
                                <button
                                    className="bg-yellow-400 px-2 py-1 rounded-lg text-xs sm:text-sm hover:scale-105"
                                    onClick={() => handleClick(product)}
                                >
                                    Add to cart
                                </button>
                                <FaHeart
                                    className="text-lg sm:text-xl text-red-600 fill-red-600 absolute bottom-2 right-4 hover:scale-110"
                                    onClick={() => handleClick2(product)}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Login Prompt */}
            {message && (
                <div className="bg-black fixed top-[250px] left-1/2 transform -translate-x-1/2 rounded-lg bg-opacity-90 py-3 px-4">
                    <div className="text-white p-4 rounded-lg bg-opacity-80 flex flex-col gap-3 relative">
                        <p>Please Login/Sign-Up into your account</p>
                        <button
                            className="bg-yellow-500 px-3 rounded-lg"
                            onClick={goToLogin}
                        >
                            Go to Login Page
                        </button>
                        <div
                            className="absolute top-0 right-4 cursor-pointer"
                            onClick={(e) => setMessage(false)}
                        >
                            <MdCancel />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
