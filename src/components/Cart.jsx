import React, { useContext } from 'react';
import { CartContext } from '../context/ContextCart';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b py-3">
              <img src={item.image} alt={item.title} className="h-16" />
              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                className="w-16 border px-2 py-1"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">Total: ${total}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;