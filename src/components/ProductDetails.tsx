import React, { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";

function ProductDetails() {

    // Get the product id
    const { id } = useParams();

    // State to store details and errors and to track loading status
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1'; // Get page from query params, default to '1'

    useEffect(() => {

        // Data fetching
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status:${response.status}`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]); // Ensures the effect runs when ID changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    // Display product information - image, title, description etc.
    return (
        <div className="product-details-container">
            <div className="product-details-info">
                <Link to={`/?page=${page}`} className="product-details-back-button">&lt; Back to Product List</Link>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>Brand: {product.brand}</p>
                <p>Rating: {product.rating}</p>
                <p>Stock: {product.stock}</p>
                <p>Price: ${product.price}</p>

                {/* Adding div to create a separaing line */}
                <div className="horizontal-line"></div>
                <h2>Reviews</h2>
                <ul>
                    {product.reviews.map((review: any, index: number) => (
                        <li key={index}>
                            {review.rating} stars - {review.comment}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Adding div to create vertical separating line */}
            <div className="product-details-separator"></div>
            <div className="product-details-image">
                <ImageGallery images={product.images} />
            </div>
        </div>
    );
}

export default ProductDetails;
