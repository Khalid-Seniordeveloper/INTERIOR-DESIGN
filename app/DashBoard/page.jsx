'use client';

import React, { useState, useEffect } from 'react';
import createClient from '@sanity/client';

// Sanity client configuration
const sanity = createClient({
  projectId: 'tzca0taz',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false, // For write operations, CDN is not used
  token: 'skJa484NUi5bdqsese9ddoXuZwjWRos63Rbnf1gWM9txJm5oNAR0vk4Yb9DwdHcYDmH5xKsWFX6vJRLsaS7HGThXFfsRGN8eE5Oz6WvM5iej9eZI0I1vHxT14NdYAk8MfVKvLB4KpWjA9VnMk6VqXRgybn3KymElHBtg3PI1USuc6uJ92C8h', // Direct token for testing
});

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newImage, setNewImage] = useState(null);

  // Hardcoded login credentials (for demo purposes)
  const validUsername = 'khalid6891';
  const validPassword = '098123';

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true); // Login successful
      setMessage('');
    } else {
      setMessage('Incorrect username or password.');
    }
  };

  // Handle form submission for adding a new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage('Please upload an image.');
      return;
    }
    setLoading(true);

    try {
      const uploadedImage = await sanity.assets.upload('image', image);
      const productData = {
        _type: 'product',
        title,
        description,
        price: parseFloat(price),
        discountPercentage: parseFloat(discountPercentage),
        tags: tags.split(','),
        productImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: uploadedImage._id,
          },
        },
      };
      const response = await sanity.create(productData);
      if (response._id) {
        setMessage('Product added successfully!');
        fetchProducts();
      } else {
        setMessage('Failed to add product. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to add product. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        title,
        price,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        description,
        "tags": tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Delete product
  const handleDelete = async (productId) => {
    try {
      await sanity.delete(productId);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewImage(null);
  };

  // Update product details
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      _id: editingProduct._id,
      _type: 'product',
      title: editingProduct.title,
      description: editingProduct.description,
      price: editingProduct.price,
      discountPercentage: editingProduct.discountPercentage,
      tags: Array.isArray(editingProduct.tags) ? editingProduct.tags : editingProduct.tags.split(','),
    };

    if (newImage) {
      try {
        const uploadedImage = await sanity.assets.upload('image', newImage);
        updatedProduct.productImage = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: uploadedImage._id,
          },
        };
      } catch (error) {
        console.error('Error uploading image:', error);
        setMessage('Failed to upload new image.');
        return;
      }
    } else if (editingProduct.productImage && editingProduct.productImage.asset) {
      updatedProduct.productImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: editingProduct.productImage.asset._ref,
        },
      };
    }

    try {
      const response = await sanity.patch(editingProduct._id).set(updatedProduct).commit();
      if (response._id) {
        setEditingProduct(null);
        setMessage('Product updated successfully!');
        fetchProducts();
      } else {
        setMessage('Failed to update product. Please try again.');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      setMessage('Failed to update product. Please try again.');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated]);

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          {message && <p className="mb-4 text-red-500">{message}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border rounded p-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin dashboard UI
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          placeholder="Discount Percentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p>{product.description.slice(0, 40)}...</p>
            <p className="text-gray-500">Price: ${product.price}</p>
            <p className="text-gray-500">Discount: {product.discountPercentage}%</p>
            <p className="text-gray-500">Tags: {product.tags.join(', ')}</p>

            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            </div>

            {editingProduct && editingProduct._id === product._id && (
              <div className="mt-4">
                <form onSubmit={handleUpdate} className="space-y-4">
                  <input
                    type="text"
                    value={editingProduct.title}
                    onChange={(e) => setEditingProduct((prev) => ({ ...prev, title: e.target.value }))}
                    className="border rounded p-2 w-full"
                  />
                  <textarea
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct((prev) => ({ ...prev, description: e.target.value }))}
                    className="border rounded p-2 w-full"
                  />
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct((prev) => ({ ...prev, price: e.target.value }))}
                    className="border rounded p-2 w-full"
                  />
                  <input
                    type="number"
                    value={editingProduct.discountPercentage}
                    onChange={(e) => setEditingProduct((prev) => ({ ...prev, discountPercentage: e.target.value }))}
                    className="border rounded p-2 w-full"
                  />
                  <input
                    type="file"
                    onChange={(e) => setNewImage(e.target.files[0])}
                    className="border rounded p-2 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded w-full"
                    disabled={loading}
                  >
                    {loading ? 'Updating...' : 'Save Changes'}
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
