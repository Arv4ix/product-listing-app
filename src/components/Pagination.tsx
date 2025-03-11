import React from "react";
import { useNavigate } from "react-router-dom";

// Defining the props
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

// Create page numbers and navigate to selected page when clicked
function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    const navigate = useNavigate(); // Navigate to different route

    // Update the page nad change URL
    const handlePageChange = (pageNumber: number) => {
        onPageChange(pageNumber);
        navigate(`/?page=${pageNumber}`); // Navigate to new page URL
    };

    // Display the page buttons to navigate between pages
    return (
        <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                {"<"} {/* Page side button 'Previous' */}
            </button>
            {pageNumbers.map((page) => (
                <button class="pagination-button" key={page} onClick={() => handlePageChange(page)} disabled={currentPage === page}>
                    {page}
                </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                {">"} {/* Page side button 'Next' */}
            </button>
        </div>
    );
}

export default Pagination;
