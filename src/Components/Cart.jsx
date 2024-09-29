// import React, { useState } from 'react';
// import { useAuth } from './AuthContext';
// import { MdDelete } from "react-icons/md";

// const Cart = () => {
//     const { cart, removeFromCart } = useAuth();
//     const [quant, setQuant] = useState(1);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 cart.map((product, index) => (
//                     <div key={index} className="border p-4 mb-4 bg-slate-200 rounded-lg relative">
//                         <img src={product.thumbnail} alt={product.title} className="h-24 w-24 object-contain mb-4" />
//                         <h3 className="text-lg font-bold">{product.title}</h3>
//                         <p className="text-lg font-semibold">${product.price * quant}</p>
//                         <button className="px-2 py-1 rounded-md absolute right-2 bottom-2" onClick={() => removeFromCart(product.id)}>
//                             <MdDelete className='text-3xl text-red-600 hover:scale-105' />
//                         </button>
//                         <label htmlFor='qt'>Quantity</label>
//                         <input type='number' name='qt' className='border border-black w-9 ml-2 rounded-lg text-center outline-none' onChange={(e)=>setQuant(e.target.value)}/>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default Cart;


// Cart.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const { cart, removeFromCart } = useAuth();
    
    const [quantities, setQuantities] = useState(() =>
        cart.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
    );

    const handleQuantityChange = (productId, value) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: value > 0 ? value : 1 // Minimum quantity is 1
        }));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Your Cart</h2>
            {cart.length === 0 ? (
                <p className='text-white'>Your cart is empty.</p>
            ) : (
                cart.map((product) => (
                    <div key={product.id} className="border p-4 mb-4 bg-slate-200 rounded-lg relative">
                        <img src={product.thumbnail} alt={product.title} className="h-24 w-24 object-contain mb-4" />
                        <h3 className="text-lg font-bold">{product.title}</h3>
                        <p className="text-lg font-semibold">
                            ${product.price * quantities[product.id]}
                        </p>
                        <label htmlFor={`qt-${product.id}`}>Quantity</label>
                        <input
                            type="number"
                            name={`qt-${product.id}`}
                            className="border border-black w-9 ml-2 rounded-lg text-center"
                            value={quantities[product.id]}
                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        />
                        <button className="px-2 py-1 rounded-md absolute right-2 bottom-2" onClick={() => removeFromCart(product.id)}>
                            <MdDelete className="text-3xl text-red-700" />
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;

