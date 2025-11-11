import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";  // ✅ default import

import { getCart, checkout } from "../services/order";

export default function Checkout() {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {//Fetching the cart data|V|
    if (user) {
      getCart().then(setCart).catch(console.error);
    }
  }, [user]);

  const handleCheckout = async () => {//Handles the checkout for the user |V|
    setLoading(true);
    try {
      await checkout();
      alert("Payment successful!");
      setCart([]);
    } catch (err) {
      alert("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p>Please login to checkout.</p>;
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item._id} className="mb-2">
            {item.product.name} x {item.quantity} = $
            {item.product.price * item.quantity}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">
        Total: $
        {cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)}
      </p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
