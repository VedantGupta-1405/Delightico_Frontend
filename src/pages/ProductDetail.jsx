import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/product";
import useAuth from "../hooks/useAuth";  // ✅ correct import

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useAuth() || {};

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-semibold">${product.price}</p>

      {user && (
        <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDetail;
