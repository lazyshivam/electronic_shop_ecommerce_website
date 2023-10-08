import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center transform scale-105 transition-transform duration-500 hover:scale-110 max-w-md w-full">
                <svg
                    className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">404</h1>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Oops!</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-lg md:text-xl text-gray-700 mb-6">Page Not Found</p>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-200"
                    onClick={goBack}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
