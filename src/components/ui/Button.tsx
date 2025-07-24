import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    loading = false,
    onClick,
    href,
    type = 'button',
    className = '',
}) => {
    const baseClasses = 'font-semibold rounded-md transition-all duration-200 inline-flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-pink-500 text-white hover:bg-pink-600 disabled:bg-gray-400',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
        danger: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-400',
        outline: 'border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white disabled:border-gray-300 disabled:text-gray-300',
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2 text-base',
        lg: 'px-8 py-3 text-lg',
    };

    const classes = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        disabled || loading ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
    ].filter(Boolean).join(' ');

    const content = (
        <>
            {loading && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {children}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                onClick={disabled ? undefined : onClick}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export default Button;
