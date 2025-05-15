import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/ContextCart';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false); // for cart button feedback

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch product (${res.status})`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
          toast.success('🛒 Added to cart!');

      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (loading) return <Spinner />;
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50 text-red-600">
        <p className="text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 bg-gray-50 min-h-screen">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 object-contain border rounded bg-white p-4"
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600 font-semibold text-lg">${product.price}</p>
        <p className="text-sm text-yellow-500">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>

        <button
          onClick={handleAddToCart}
          className={`mt-2 px-6 py-2 text-white rounded transition duration-300 cursor-pointer ${
            added ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {added ? 'Added ✔️' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
