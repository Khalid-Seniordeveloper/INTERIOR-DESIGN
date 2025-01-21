'use client';
import React, { useEffect, useState } from "react";
import createClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import Card from '../Component/Card/Card';

const sanity = createClient({
  projectId: "tzca0taz",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

const ProductCards = ({ selectedPrice }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] | order(_createdAt desc) {
          _id,
          title,
          price,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          description,
          "tags": tags
        }
      `;
      const data = await sanity.fetch(query);
      setAllProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = selectedPrice
      ? allProducts.filter(product => product.price <= Number(selectedPrice))
      : allProducts;
    setCurrentPage(1);  // Reset to the first page when applying filters
    setDisplayProducts(filteredProducts);
  }, [selectedPrice, allProducts]);

  const totalPages = Math.ceil(displayProducts.length / productsPerPage);

  const paginatedProducts = displayProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-24 w-24"></div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {paginatedProducts.map((product) => (
              <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <Link href={`/product/${product._id}`} legacyBehavior>
                  <a className="block">
                    <Card
                      src={product.imageUrl}
                      title={product.title}
                      description={product.description.slice(0, 15)}
                      price={product.price}
                      cutprice={product.price + (product.discountPercentage ? (product.price * product.discountPercentage / 100) : 0)}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Pagination */}
          <div className="flex justify-center mt-20 gap-14">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`w-[5rem] h-[5rem] rounded-[1rem] flex justify-center items-center transition-[.5s] cursor-pointer ${
                  currentPage === i + 1 ? 'bg-[#B88E2F]' : 'bg-[#F9F1E7]'
                }`}
              >
                <h1 className={`text-4xl ${currentPage === i + 1 ? 'text-white' : 'text-black'}`}>
                  {i + 1}
                </h1>
              </div>
            ))}
            <div
              onClick={() => handlePageChange(currentPage + 1)}
              className={`w-[8rem] h-[5rem] bg-[#F9F1E7] rounded-[1rem] flex justify-center items-center transition-[.5s] cursor-pointer ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <h1 className="text-4xl text-black next">Next</h1>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductCards;
