import React from 'react';

interface FeatureCardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,
    className = '',
}) => {
    const defaultIcon = (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
    );

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div className="bg-pink-500 text-white rounded-full p-4 mb-4">
                {icon || defaultIcon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;
