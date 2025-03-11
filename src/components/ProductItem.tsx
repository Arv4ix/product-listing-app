import React from "react";
import { Link } from "react-router-dom"; // For navigation

// Define the props that component expects
interface ProductItemProps {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    currentPage: number;
}

// Show products image, title and price. Images and title are clickable
function ProductItem({ id, title, thumbnail, price, currentPage }: ProductItemProps) {
    return (
        <div className="product-item">
            <Link to={`/products/${id}?page=${currentPage}`}>
                <img src={thumbnail} alt={title} />
            </Link>
            <div className="details">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default ProductItem;
