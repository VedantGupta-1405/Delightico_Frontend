import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";  // ✅ default import

import { getCart, updateCart, removeFromCart } from "../services/order";
import { Link } from "react-router-dom";

export default function Cart() {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      getCart().then(setCart).catch(console.error);
    }
  }, [user]);

  const handleUpdate = (id, qty) => {
    updateCart(id, qty).then(setCart).catch(console.error);
  };

  const handleRemove = (id) => {
    removeFromCart(id).then(setCart).catch(console.error);
  };

  if (!user) {
    return <p className="text-red-500">Please login to view your cart.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <h3 className="font-semibold">{item.product.name}</h3>
                <p>${item.product.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdate(item._id, e.target.value)}
                  className="w-16 border rounded text-center"
                />
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between">
            <p className="font-bold">
              Total: $
              {cart.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
              )}
            </p>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
