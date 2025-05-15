import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "../components/Spinner";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("helo");
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Reset error state before trying again

      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        });

        if (!response.ok) {
          // If response is not 2xx
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(`Failed to fetch products. ${err.message}`);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

if (loading) return <Spinner />;
if (error) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-50">
      <p className="text-red-600 text-lg font-semibold">{error}</p>
    </div>
  );
}
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
