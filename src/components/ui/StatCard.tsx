import React from 'react';

interface StatCardProps {
    value: string;
    label: string;
    className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
    value,
    label,
    className = '',
}) => {
    return (
        <div className={`text-center ${className}`}>
            <div className="text-4xl font-bold mb-2">{value}</div>
            <p className="opacity-90">{label}</p>
        </div>
    );
};

export default StatCard;
