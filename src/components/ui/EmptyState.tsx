import React from 'react';

interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    action,
    className = '',
}) => {
    const defaultIcon = (
        <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
    );

    return (
        <div className={`text-center py-12 ${className}`}>
            <div className="mb-4">
                {icon || defaultIcon}
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
            {description && (
                <p className="text-gray-500 mb-6">{description}</p>
            )}
            {action && action}
        </div>
    );
};

export default EmptyState;
