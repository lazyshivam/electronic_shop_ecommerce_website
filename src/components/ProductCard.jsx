const ProductCard = ({ product }) => {

    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <div className="relative ">
                <img src={product.image}  alt={product.name} className="w-full h-56 object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-500 font-bold mt-2">${product.price}</p>
            <div className="flex items-center mt-2">
                {/* Add to Cart button */}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2">Add to Cart</button>
                <div className="flex items-center">
                    {/* Display product rating (you can use an appropriate rating component) */}
                    <span className="text-yellow-500 mr-1">&#9733;</span>
                    <span className="text-gray-600">{product.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;