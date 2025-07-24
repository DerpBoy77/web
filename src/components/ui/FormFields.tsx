import React from 'react';

interface InputProps {
    label?: string;
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextareaProps {
    label?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    rows?: number;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({
    label,
    type = 'text',
    name,
    value,
    placeholder,
    required = false,
    disabled = false,
    error,
    className = '',
    onChange,
}) => {
    const baseClasses = 'w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors';
    const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
    const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';

    const inputClasses = [
        baseClasses,
        errorClasses,
        disabledClasses,
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className="space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                onChange={onChange}
                className={inputClasses}
            />
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

const Textarea: React.FC<TextareaProps> = ({
    label,
    name,
    value,
    placeholder,
    required = false,
    disabled = false,
    error,
    rows = 4,
    className = '',
    onChange,
}) => {
    const baseClasses = 'w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-vertical';
    const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
    const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';

    const textareaClasses = [
        baseClasses,
        errorClasses,
        disabledClasses,
        className,
    ].filter(Boolean).join(' ');

    return (
        <div className="space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                rows={rows}
                onChange={onChange}
                className={textareaClasses}
            />
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export { Input, Textarea };
