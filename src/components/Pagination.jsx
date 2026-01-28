import React from 'react'

function Pagination({ page, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;
    
    const pages = [];
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            <button disabled={page === 1}
                onClick={() => onPageChange(page - 1)}>
                Prev
            </button>

            {pages.map((number) => {
                <button
                    key={number}
                    className={page === number ? "active" : ""}
                    onClick={() => onPageChange(number)}>
                    {number}
                </button>
            })}

            <button disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}>
                Next
            </button>
        </div>
    )
}

export default Pagination;
