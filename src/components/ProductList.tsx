import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";


function ProductList() {

    // Get the page number from URL
    const [searchParams] = useSearchParams();
    const initialPage = parseInt(searchParams.get('page') || '1', 10);

    // State to store the products, loading status and errors
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // State for managing pagination - track current page, total number of pages and how many products shown
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 10;

    useEffect(() => {

        // Fetch the products from the DummyJSON API
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage- 1) * productsPerPage}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status:${response.status}`);
                }
                const data = await response.json();
                // Update the product state with fetched data
                setProducts(data.products);
                setTotalPages(Math.ceil(data.total / productsPerPage));
            } catch (e:any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage]); // Re-fetch products when currentPage changes

    // Update the URL with correct page number
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Display loading message while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    // Display error message if issue arises
    if (error) {
        return <div>Error:{error}</div>;
    }

    // Displaying the products with thumbnail images, title and price
    return (
        <div className="product-list">
            <h1>Product List</h1>
            <div className="product-list-container">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        thumbnail={product.thumbnail}
                        price={product.price}
                        currentPage={currentPage} // Pass the currentPage to the ProductItem
                    />
                ))}
            </div>
            {/* Display pagination controls */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default ProductList;
