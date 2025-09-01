import React from 'react';

export default function Card({ children, className = '' }) {
    return (
        <div
            className={`border-2 border-black shadow-black rounded-lg ${className}`}
        >
            {children}
        </div>
    );
}
