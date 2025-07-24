import React from 'react';

interface ProductCardProps {
    id: number;
    name: string;
    category: string;
    image?: string;
    onAddToEnquiry?: (product: { id: number; name: string; category: string; image?: string }) => void;
    isInEnquiry?: boolean;
    actionLabel?: string;
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    category,
    image,
    onAddToEnquiry,
    isInEnquiry = false,
    actionLabel,
    className = '',
}) => {
    const handleAction = () => {
        if (onAddToEnquiry) {
            onAddToEnquiry({ id, name, category, image });
        }
    };

    const getActionLabel = () => {
        if (actionLabel) return actionLabel;
        return isInEnquiry ? "✓ ADDED TO ENQUIRY" : "ADD TO ENQUIRY";
    };

    const getButtonClasses = () => {
        return `w-full py-2 rounded-md transition-colors cursor-pointer ${isInEnquiry
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-pink-500 text-white hover:bg-pink-600"
            }`;
    };

    return (
        <div className={`bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-200 hover-lift hover-scale group ${className}`}>
            {image ? (
                <img src={image} alt={name} className="w-full h-48 object-cover mx-auto mb-4 rounded transition-transform duration-200 group-hover:scale-105" />
            ) : (
                <div className="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center transition-colors duration-200 group-hover:bg-gray-300">
                    <span className="text-gray-500">No Image</span>
                </div>
            )}
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500 mb-4">{category}</p>
            {onAddToEnquiry && (
                <button
                    onClick={handleAction}
                    className={getButtonClasses()}
                >
                    {getActionLabel()}
                </button>
            )}
        </div>
    );
};

export default ProductCard;
