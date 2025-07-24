import React from 'react';

// Fade In Animation
export const FadeIn: React.FC<{
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}> = ({ children, delay = 0, duration = 0.6, className = '' }) => {
    return (
        <div
            className={`animate-fadeIn ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
};

// Slide Up Animation
export const SlideUp: React.FC<{
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}> = ({ children, delay = 0, duration = 0.6, className = '' }) => {
    return (
        <div
            className={`animate-slideUp ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
};

// Slide In From Left
export const SlideInLeft: React.FC<{
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}> = ({ children, delay = 0, duration = 0.6, className = '' }) => {
    return (
        <div
            className={`animate-slideInLeft ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
};

// Slide In From Right
export const SlideInRight: React.FC<{
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}> = ({ children, delay = 0, duration = 0.6, className = '' }) => {
    return (
        <div
            className={`animate-slideInRight ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
};

// Scale In Animation
export const ScaleIn: React.FC<{
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}> = ({ children, delay = 0, duration = 0.5, className = '' }) => {
    return (
        <div
            className={`animate-scaleIn ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
};

// Bounce In Animation
export const BounceIn: React.FC<{
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}> = ({ children, delay = 0, duration = 0.8, className = '' }) => {
    return (
        <div
            className={`animate-bounceIn ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
};

// Stagger Animation Container
export const StaggerContainer: React.FC<{
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div className={className}>
            {childrenArray.map((child, index) => (
                <div
                    key={index}
                    className="animate-fadeIn"
                    style={{
                        animationDelay: `${index * staggerDelay}s`,
                        animationFillMode: 'both'
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

// Floating Animation (for decorative elements)
export const Float: React.FC<{
    children: React.ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
}> = ({ children, className = '', duration = 3, delay = 0 }) => {
    return (
        <div
            className={`animate-float ${className}`}
            style={{
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                animationIterationCount: 'infinite'
            }}
        >
            {children}
        </div>
    );
};

// Pulse Animation (for attention-grabbing elements)
export const Pulse: React.FC<{
    children: React.ReactNode;
    className?: string;
    duration?: number;
}> = ({ children, className = '', duration = 2 }) => {
    return (
        <div
            className={`animate-pulse ${className}`}
            style={{
                animationDuration: `${duration}s`,
                animationIterationCount: 'infinite'
            }}
        >
            {children}
        </div>
    );
};
