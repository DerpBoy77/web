import React from 'react';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'colored';
    color?: 'pink' | 'blue' | 'green' | 'gray';
    padding?: 'sm' | 'md' | 'lg';
    shadow?: boolean;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    color = 'pink',
    padding = 'md',
    shadow = true,
    className = '',
}) => {
    const baseClasses = 'rounded-lg transition-all duration-200 hover-lift';

    const variantClasses = {
        default: 'bg-white border border-gray-200',
        colored: {
            pink: 'bg-pink-50 border border-pink-200',
            blue: 'bg-blue-50 border border-blue-200',
            green: 'bg-green-50 border border-green-200',
            gray: 'bg-gray-50 border border-gray-200',
        },
    };

    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const shadowClasses = shadow ? 'shadow-md' : '';

    const classes = [
        baseClasses,
        variant === 'default' ? variantClasses.default : variantClasses.colored[color],
        paddingClasses[padding],
        shadowClasses,
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card;
