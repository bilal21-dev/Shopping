import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { MdDelete } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useAuth();
    const GST_RATE = 0.18; // 18% GST

    // Initialize quantities with 1 for each product in the cart
    const [quantities, setQuantities] = useState(() =>
        cart.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
    );
    const [popup, setPopup] = useState(false);
    const [final, setFinal] = useState(false);


    // Calculate total number of items
    const totalItems = cart.reduce((total, product) => total + quantities[product.id], 0);

    // Calculate total amount
    const totalAmount = cart.reduce((total, product) => total + product.price * quantities[product.id], 0);

    // Calculate GST tax and total inclusive of tax
    const gstAmount = totalAmount * GST_RATE;
    const totalWithTax = totalAmount + gstAmount;

    const handleQuantityChange = (productId, value) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: value > 0 ? value : 1 // Minimum quantity is 1
        }));
    };

    const handleChange = () => {
        setPopup(false);
        setFinal(true);
    }
    const randomNumber = Math.floor(Math.random() * 10000000 - 9000000 + 1) + 9000000
    const navigate = useNavigate();
    return (
        <div className="p-6 relative">
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

            {popup && (
                <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center'>
                    <div className='bg-white h-[450px] w-[350px] rounded-lg p-4 relative'>
                        <IoMdCloseCircle onClick={() => setPopup(false)} className='absolute right-4 top-4 text-lg' />
                        <div className='mt-8 flex flex-col gap-3'>
                            <h2 className='flex justify-center font-bold text-xl'>Order Summary</h2>
                            <div className='bg-slate-300 rounded-lg px-3 py-2 font-semibold'>
                                Total Number of Items: <span className='bg-white font-normal px-2 rounded-md'>{totalItems}</span>
                            </div>
                            <div className='bg-slate-300 rounded-lg px-3 py-2 font-semibold'>
                                Total Amount: <span className='bg-white font-normal px-2 rounded-md'>${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className='bg-slate-300 rounded-lg px-3 py-2 font-semibold'>
                                GST Tax (18%): <span className='bg-white font-normal px-2 rounded-md'>${gstAmount.toFixed(2)}</span>
                            </div>
                            <div className='bg-slate-300 rounded-lg px-3 py-2 font-semibold'>
                                Amount Inclusive of Tax: <span className='bg-white font-normal px-2 rounded-md'>${totalWithTax.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className='absolute right-[40%] top-[90%] bg-blue-500 px-4 py-1 rounded-md text-white hover:bg-blue-400 transition duration-300' onClick={handleChange}>Done</button>
                    </div>
                </div>
            )}

            {final && (
                <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center'>
                    <div className='bg-white h-[250px] w-[450px] rounded-lg relative'>
                        <p className='flex justify-center mt-[20px] text-xl font-bold'>Your Order has been Completed</p>
                        <div className='flex justify-center'>
                            <IoCheckmarkDoneCircleOutline className='text-9xl text-green-800' />
                        </div>
                        <div className='flex justify-center mt-[40px]'>
                            <p className='font-bold'>Tracking id : <span className='font-normal'>{randomNumber}</span></p>
                        </div>
                        <IoMdCloseCircle className='absolute top-[5px] right-3' onClick={()=>{
                            setPopup(false)
                            setFinal(false)
                            navigate('/home');
                        }}/>
                    </div>
                </div>
            )}

            {cart.length > 0 && (
                <button
                    className='absolute left-[47%] bg-blue-600 px-6 py-2 rounded-lg text-lg text-white hover:bg-blue-500 transition duration-300'
                    onClick={() => setPopup(true)}
                >
                    Proceed
                </button>
            )}
        </div>
    );
};

export default Cart;
