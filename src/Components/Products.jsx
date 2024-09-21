import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=100');
            const data = response.data;
            setProducts(data.products);
            setLoad(false)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-6 p-6 ml-[215px] bg-white">
            <div className='bg-blue-700 fixed left-4 top-[75px] w-[200px] h-[400px] rounded-md px-3 py-4 text-white flex flex-col gap-5 shadow-lg'>
                <h1 className='font-bold text-xl'>Categories</h1>
                <ul className='text-md'>
                    <li>Men's Outfit</li>
                    <li>Women's Outfit</li>
                    <li>Electronics</li>
                    <li>Cosmetics</li>
                    <li>Men's Outfit</li>
                </ul>
            </div>
            {load ? (
                <div className="absolute top-[250px] left-[650px] flex flex-col gap-4 align-middle justify-center items-center">
                    <div className="loader border-t-4 border-blue-700 rounded-full w-16 h-16 animate-spin"></div>
                    <p className="ml-1 text-lg font-semibold">Loading products...</p>
                </div>
            ) : (
                // Products grid
                products.map(product => (
                    <div key={product.id} className="border p-4 bg-slate-200 rounded-lg hover:scale-105 transition duration-300 ease-in-out hover:border-black relative">
                        <img src={product.thumbnail} alt={product.title} className="h-48 w-48 object-contain mb-4" />
                        <h3 className="text-lg font-bold">{product.title}</h3>
                        <p className="text-lg font-semibold">${product.price}</p>
                        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col gap-5 justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
                            <p className="text-sm text-white text-center">{product.description}</p>
                            <button className='bg-yellow-400 px-2 py-1 rounded-lg text-sm'>Add to cart</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Products;