import React, { createContext, useContext, useState,useEffect } from 'react';
import ProductsContexts from '../contexts/ProductsContext';
import Slider from 'react-slick';
import { logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8 } from '../Image/Brand/BrandLogo';


// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bgImage1 from '../Image/pexels-david-bartus-916015.jpg';
import bgImage2 from '../Image/pexels-marx-ilagan-1091294.jpg';
import bgImage3 from '../Image/pexels-stas-knop-1298601.jpg';

import { PlayIcon, TruckIcon, ArrowLeftIcon, ArrowRightIcon, WalletIcon, ArrowPathIcon } from '@heroicons/react/20/solid';
import { PhoneIcon } from '@heroicons/react/24/outline';
import ProductCard from './ProductCard';
// const brandImages = images.keys().map(image => images(image));

const Home = () => {
    // const { Hello, products } = useContext(ProductsContexts);

   
  

    const [currentSlide, setCurrentSlide] = useState(0); // To track the current slide

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        afterChange: (current) => setCurrentSlide(current), // Update currentSlide when slide changes
    };

    const sliderforBrand = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Number of visible slides at a time
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
    };

    const windowWidth = window.innerWidth;

    let productsPerSlide = 6; // Default number of products per slide
    if (windowWidth < 400) {
        productsPerSlide = 2;
    }
    else if (windowWidth < 768) {
        productsPerSlide = 3; // Adjust for smaller screens
    } else if (windowWidth < 1024) {
        productsPerSlide = 5; // Adjust for medium-sized screens
    }

    const sliderSettings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: productsPerSlide, // Adjust the number of visible slides
        slidesToScroll: 1,
    };


    const sliderRef = React.createRef();

    const goToNextSlide = () => {
        sliderRef.current.slickNext(); // Go to the next slide
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev(); // Go to the previous slide
    };

    const handleMouseEnter = () => {
        // Show the navigation buttons when the user hovers over the slider
        document.getElementById('navButtons').style.opacity = '1';
    };

    const handleMouseLeave = () => {
        // Hide the navigation buttons when the user leaves the slider
        document.getElementById('navButtons').style.opacity = '0';
    };

    const [selectedCategory, setSelectedCategory] = useState('accessories'); // Default category

    // Sample product data (replace with your actual product data)
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            image: bgImage3,
            category: 'accessories',
            rating: 4.5,
        },
        {
            id: 11,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            image: bgImage3,
            category: 'accessories',
            rating: 4.5,
        },
        {
            id: 111,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            image: bgImage3,
            category: 'accessories',
            rating: 4.5,
        },
        {
            id: 1111,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            image: bgImage3,
            category: 'accessories',
            rating: 4.5,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product 2 description',
            price: 1002,
            image: bgImage3,
            category: 'phones',
            rating: 4.52,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product 1 description',
            price: 1003,
            image: bgImage3,
            category: 'laptops',
            rating: 4.5,
        },
        // Add more products
    ];

    const products1 = [
        { id: 1, name: "Product 1", image: bgImage3 },
        { id: 2, name: "Product 2", image: bgImage3 },
        { id: 3, name: "Product 3", image: bgImage3 },
        { id: 4, name: "Product 3", image: bgImage3 },
        { id: 5, name: "Product 3", image: bgImage3 },
        { id: 6, name: "Product 3", image: bgImage3 },
        { id: 7, name: "Product 3", image: bgImage3 },
        { id: 8, name: "Product 3", image: bgImage3 },
        { id: 9, name: "Product 3", image: bgImage3 },
        { id: 10, name: "Product 3", image: bgImage3 },
        { id: 11, name: "Product 3", image: bgImage3 },



        // Add more products
    ];

    const brandImages=[logo1, logo2,logo3,logo4,logo5,logo6,logo7,logo8];
    const filteredProducts = products.filter((product) => product.category === selectedCategory);



    return (
        <>
            <div
                className="relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Slider {...sliderSettings} ref={sliderRef}>
                    <div className="h-screen">
                        <div
                            className="bg-cover bg-center h-full flex flex-col justify-center items-center"
                            style={{
                                backgroundImage: `url(${bgImage1})`,
                            }}
                        >
                            <div className="space-y-5">
                                <h3 className='text-black text-xl'>Up To 40% Discount</h3>
                                <h1 className="text-6xl font-bold text-black">Custom Xbox One Controller</h1>
                                <button className='p-3 font-semibold bg-teal-500 shadow-md hover:bg-black hover:text-white rounded-full'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen">
                        <div
                            className="bg-cover bg-center h-full flex flex-col justify-center items-center"
                            style={{
                                backgroundImage: `url(${bgImage2})`,
                            }}
                        >
                            <div className="space-y-5 relative   -left-96 max-lg:-left-20 w-96">
                                <h3 className='text-black text-xl'>Up To 40% Discount</h3>
                                <p className="text-6xl font-bold  text-black">Custom Xbox One Controller</p>
                                <button className='p-3 font-semibold bg-teal-500 shadow-md hover:bg-black hover:text-white rounded-full'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    {/* Add more slides as needed */}
                </Slider>

                <div
                    id="navButtons"
                    className="absolute mx-12 h-screen top-0 left-0 right-0 flex justify-between items-center mt-4 opacity-0 transition-opacity duration-300"
                >
                    <button
                        onClick={goToPrevSlide}
                        className="bg-teal-600 text-xl text-white p-3 rounded-2xl"
                    >
                        <PlayIcon className="w-5 rotate-180" />
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="text-xl text-white p-3 rounded-2xl bg-teal-600"
                    >
                        <PlayIcon className="w-5" />
                    </button>
                </div>

                <div className="text-center mt-4">
                    {Array.from({ length: '2' }, (_, index) => (
                        <span
                            key={index}
                            onClick={() => sliderRef.current.slickGoTo(index)} // Go to a specific slide on indicator click
                            className={`${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'
                                } h-4 w-4 rounded-full inline-block mx-2 cursor-pointer`}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="container px-14 max-md:px-4">
                <div className="flex  flex-col items-center mt-10 max-md:space-y-8 justify-center sm:flex-row sm:space-x-8">
                    <a
                        href="#"
                        className="relative w-full max-w-md h-60 rounded-3xl bg-cover bg-center transition-transform ease-in-out transform hover:scale-110 duration-300 delay-150"
                        style={{ backgroundImage: `url(${bgImage3})` }}
                    >
                        <div className="absolute top-20 left-5 text-red-400 space-y-4">
                            <h4 className="text-lg">Up To 40% Discount</h4>
                            <p className="font-semibold text-2xl">Custom Xbox One Controller</p>
                            <button className="underline text-xs font-semibold">SHOP NOW</button>
                        </div>
                    </a>

                    <a
                        href="#"
                        className="relative w-full max-w-md h-60 rounded-3xl bg-cover bg-center transition-transform ease-in-out transform hover:scale-110 duration-300 delay-150"
                        style={{ backgroundImage: `url(${bgImage2})` }}
                    >
                        <div className="absolute top-20 left-5 text-blue-400 space-y-4">
                            <h4 className="text-lg">Up To 40% Discount</h4>
                            <p className="font-semibold text-2xl">Custom Xbox One Controller</p>
                            <button className="underline text-xs font-semibold">SHOP NOW</button>
                        </div>
                    </a>

                    <a
                        href="#"
                        className="relative w-full max-w-md h-60 rounded-3xl bg-cover bg-center transition-transform ease-in-out transform hover:scale-110 duration-300 delay-150"
                        style={{ backgroundImage: `url(${bgImage1})` }}
                    >
                        <div className="absolute top-20 left-5 text-teal-400 space-y-4">
                            <h4 className="text-lg">Up To 40% Discount</h4>
                            <p className="font-semibold text-2xl">Custom Xbox One Controller</p>
                            <button className="underline text-xs font-semibold">SHOP NOW</button>
                        </div>
                    </a>
                </div>

                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center mt-10 p-5 rounded-md bg-white max-md:pace-y-8 md:space-x-10">
                    <div className="p-4 w-full md:w-auto max-w-md hover:text-teal-500 hover:cursor-pointer flex items-center space-x-3">
                        <TruckIcon className="w-10" />
                        <div>
                            <h2 className="font-semibold">Worldwide Shipping</h2>
                            <h4>Order Above $100</h4>
                        </div>
                    </div>
                    <hr className="w-0.5 hidden lg:block bg-gray-300 h-16" />
                    <div className="p-4 w-full md:w-auto max-w-md hover:text-teal-500 hover:cursor-pointer flex items-center space-x-3">
                        <ArrowPathIcon className="w-10" />
                        <div>
                            <h2 className="font-semibold">Easy 30 Day Return</h2>
                            <h4>Back Return In 7 Days</h4>
                        </div>
                    </div>
                    <hr className="w-0.5 hidden lg:block bg-gray-300 h-16" />
                    <div className="p-4 w-full md:w-auto max-w-md hover:text-teal-500 hover:cursor-pointer flex items-center space-x-3">
                        <WalletIcon className="w-10" />
                        <div>
                            <h2 className="font-semibold">Money Back Guarantee</h2>
                            <h4>Guarantee With In 30 Days</h4>
                        </div>
                    </div>
                    <hr className="w-0.5 hidden lg:block bg-gray-300 h-16" />
                    <div className="p-4 w-full md:w-auto max-w-md hover:text-teal-500 hover:cursor-pointer flex items-center space-x-3">
                        <PhoneIcon className="w-10" />
                        <div>
                            <h2 className="font-semibold">Easy Online Support</h2>
                            <h4>Any Time Support</h4>
                        </div>
                    </div>
                </div>
                {/* Products showsup for a look out  */}

                <div>
                    {/* Category Tabs */}
                    <div className="flex space-x-4 mt-10">
                        <button
                            onClick={() => setSelectedCategory('accessories')}
                            className={`border px-4 py-2 rounded-lg ${selectedCategory === 'accessories' ? 'bg-blue-500 text-white' : 'text-blue-500'
                                }`}
                        >
                            Accessories
                        </button>
                        <button
                            onClick={() => setSelectedCategory('phones')}
                            className={`border px-4 py-2 rounded-lg ${selectedCategory === 'phones' ? 'bg-blue-500 text-white' : 'text-blue-500'
                                }`}
                        >
                            Phones
                        </button>
                        <button
                            onClick={() => setSelectedCategory('laptops')}
                            className={`border px-4 py-2 rounded-lg ${selectedCategory === 'laptops' ? 'bg-blue-500 text-white' : 'text-blue-500'
                                }`}
                        >
                            Laptops
                        </button>
                        {/* Add more category buttons */}
                    </div>

                    {/* Product Listing */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>


                {/* blue info patti */}

                <div className="flex flex-col bg-teal-500 text-white md:flex-row md:flex-wrap md:justify-center md:items-center mt-10 p-5 rounded-md max-md:pace-y-8 md:space-x-10">
                    <div className="p-4 w-full md:w-auto max-w-md  flex items-center space-x-3">
                        <TruckIcon className="w-20" />

                        <h2 className="font-bold text-3xl">FREE SHIPPING</h2>


                    </div>
                    <hr className="w-0.5 hidden lg:block bg-gray-300 h-16" />
                    <div className="p-4 w-full md:w-auto max-w-md  flex items-center space-x-3">

                        <h2 className="font-semibold text-lg">Free Delivery Now On Your First Order and over $200</h2>
                    </div>
                    <hr className="w-0.5 hidden lg:block bg-gray-300 h-16" />
                    <div className="p-4 w-full md:w-auto max-w-md  flex items-center space-x-3">

                        <h2 className="font-bold text-3xl">- ONLY $200*</h2>

                    </div>
                </div>

                {/* Circular product section */}




            </div>
            <div className="relative overflow-hidden flex justify-center items-center h-96 mt-10 ">
                {/* Add a CSS class for the blurred background effect */}
                <div className="absolute opacity-60 bg-cover bg-center inset-0" style={{ backgroundImage: `url(${bgImage1})` }}></div>

                <div className="container  mx-auto p-4 relative z-10">
                    <Slider  {...sliderSettings2} ref={sliderRef}>
                        {products1.map((product) => (
                            <div key={product.id} className="flex  flex-col justify-center items-center text-center">
                                <div className="flex hover:cursor-pointer flex-col items-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    </div>

                                    <button
                                        className="bg-blue-500 hover:underline text-white py-2 px-4 rounded-full transition-opacity duration-300 hover:bg-opacity-80 hover:text-opacity-100"
                                        id='btnName'
                                        onMouseEnter={(e) => {
                                            e.target.textContent = 'Shop Now';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.textContent = product.name;
                                        }}
                                    >
                                        {product.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Previous and Next Buttons */}
                    <div className="flex relative -top-20 justify-between">
                        <button
                            className="bg-teal-500 text-white py-2 px-4 rounded-full transition-opacity duration-300 hover:bg-opacity-80 hover:text-opacity-100"
                            onClick={goToPrevSlide}
                        >
                            <ArrowLeftIcon className='w-5' />
                        </button>
                        <button
                            className="bg-teal-500 text-white py-2 px-4 rounded-full transition-opacity duration-300 hover:bg-opacity-80 hover:text-opacity-100"
                            onClick={goToNextSlide}
                        >
                            <ArrowRightIcon className='w-5' />
                        </button>
                    </div>
                </div>
            </div>
            {/* Featured Products section */}

            <div className="container  px-14 max-md:px-4">
                <div className="mt-10 mb-10">
                    <div className="flex relative justify-between items-start">
                        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
                        <button className='underline hover:text-teal-400'> VIEW ALL PRODUCTS</button>
                    </div>
                    <hr className='p-0.5 absolute bottom-20 bg-black' />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="flex items-center">
                                    <div className="w-1/3">
                                        <img src={product.image} alt={product.name} className="w-full h-auto" />
                                    </div>
                                    <div className="w-2/3 p-4">
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <div className="flex items-center text-yellow-500">
                                            {/* Display product rating (you can use an appropriate rating component) */}
                                            <span className="text-yellow-500 mr-1">&#9733;</span>
                                            <span className="text-gray-600">{product.rating}</span>
                                        </div>
                                        <p className="text-gray-600">{product.description}</p>
                                        <p className="text-blue-500 font-bold mt-2">${product.price}</p>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex relative justify-between items-start">
                        <h2 className="text-3xl font-semibold mb-6">New Products</h2>
                        <button className='underline hover:text-teal-400'> VIEW ALL PRODUCTS</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-10">
                    <div className="container bg-white mx-auto mt-5">
                        <Slider {...sliderforBrand}>
                            {brandImages.map((image, index) => (
                                <div key={index} className="px-4 ">
                                    <img src={image} alt={`Brand ${index + 1}`} className="w-32 h-32 cursor-pointer object-contain" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Home;
