import React from 'react';
import { useAuth } from './AuthContext';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const { cart, removeFromCart } = useAuth();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((product, index) => (
                    <div key={index} className="border p-4 mb-4 bg-slate-200 rounded-lg relative">
                        <img src={product.thumbnail} alt={product.title} className="h-24 w-24 object-contain mb-4" />
                        <h3 className="text-lg font-bold">{product.title}</h3>
                        <p className="text-lg font-semibold">${product.price}</p>
                        <button className="px-2 py-1 rounded-md absolute right-2 bottom-2" onClick={() => removeFromCart(product.id)}>
                        <MdDelete className='text-3xl text-red-700'/>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
