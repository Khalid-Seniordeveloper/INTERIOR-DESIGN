'use client';
import '../../app/globals.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { createClient } from '@sanity/client';
import Navbar from '../../app/Component/Navbar/Navbar';
import shopbanner from '../../app/assets/shopbanner.png';
import ProductCardsRelated from '../../app/ProductCardRelated/page';

// Sanity client configuration
const sanity = createClient({
  projectId: 'tzca0taz',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');
  const [cart, setCart] = useState([]);

  const sizes = ['XS', 'L', 'XL'];
  const colors = [
    { id: 'purple', bg: 'bg-purple-500' },
    { id: 'black', bg: 'bg-black' },
    { id: 'gold', bg: 'bg-yellow-600' },
  ];

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item._id === product._id &&
          item.size === selectedSize &&
          item.color === selectedColor
      );

      if (existingItemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }

      return [...prevCart, cartItem];
    });

    alert(`${product.title} added to cart`);
  };

  const renderStars = () => (
    <div className="flex items-center gap-2">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="w-7 h-7 text-gray-400" fill="currentColor" />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${shopbanner.src})` }}
      >
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-6xl font-bold">
          Product Details
        </h1>
      </div>

      <main className=" mx-auto p-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-32 h-32">
                    <Image
                      src={product?.imageUrl || '/placeholder.png'}
                      alt={`Thumbnail ${item}`}
                      width={128}
                      height={128}
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="flex-1">
                <Image
                  src={product?.imageUrl || '/placeholder.png'}
                  alt={product?.title || 'Main product'}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h1 className="text-5xl font-bold">{product?.title}</h1>
            <div>
              <p className="text-4xl mt-[-1rem] mb-[1rem] font-medium">Rs. {product?.price}</p>
              <div className="flex items-center gap-4">
                {renderStars()}
                <span className="text-2xl text-gray-600">{product?.reviews} Customer Review</span>
              </div>
            </div>

            <p className="text-xl text-gray-700">{product?.description}</p>

            <div>
              <p className="text-3xl mb-[1rem] font-semibold">Size</p>
              <div className="flex gap-6">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-14 h-14 text-2xl rounded-lg border ${
                      selectedSize === size
                        ? ' bg-[#B88E2F] text-white'
                        : 'border-gray-300 bg-[#F9F1E7]'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-3xl mb-[1rem] font-semibold">Color</p>
              <div className="flex gap-6">
                {colors.map(({ id, bg }) => (
                  <button
                    key={id}
                    className={`w-12 h-12 rounded-full ${bg} ${
                      selectedColor === id ? 'ring-4 ring-black' : ''
                    }`}
                    onClick={() => setSelectedColor(id)}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex items-center border border-gray-400 rounded-lg">
                <button
                  className="p-4 text-3xl"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <span className="px-6 py-4 text-3xl">{quantity}</span>
                <button
                  className="p-4 text-3xl"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

       
            </div>
            <div className='flex gap-[2rem] flex-wrap'>
             <button
                onClick={handleAddToCart}
                className="px-10 py-5 bg-black text-white text-3xl rounded-lg hover:bg-gray-800"
              >
                Add To Cart
              </button>
              
            <Link href='/Cart'>
            <button
                className="px-10 py-5 bg-black text-white text-3xl rounded-lg hover:bg-gray-800"
              >
                Go To Cart 
              </button>
            </Link>
             </div>
            <div className="border-t pt-6 space-y-4 text-xl text-gray-600">
              <div className="flex gap-4">
                <span>SKU:</span>
                <span>{product?._id}</span>
              </div>
              <div className="flex gap-4">
                <span>Category:</span>
                <span>Sofas</span>
              </div>
              <div className="flex gap-4">
                <span>Tags:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex gap-4">
                <span>Share:</span>
                <div className="flex gap-6">
                  <button className="hover:text-black">Facebook</button>
                  <button className="hover:text-black">LinkedIn</button>
                  <button className="hover:text-black">Pinterest</button>
                </div>
              </div>
            </div>
          </div>
        </div>
 <h1 className='text-center range text-[2.5rem] mt-[2rem]'>Related Products</h1>
 
        <div className='main-all-card-container-api flex  justify-center gap-11 mt-12'>
  
  <ProductCardsRelated/>
  </div>

      </main>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const query = `*[_type == "product" && _id == "${id}"]{
    _id, title, price, description, "imageUrl": productImage.asset->url, reviews
  }[0]`;

  try {
    const product = await sanity.fetch(query);
    if (!product) {
      return { notFound: true };
    }
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { notFound: true };
  }
}

export default ProductPage;
