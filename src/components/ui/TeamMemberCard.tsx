import React from 'react';

interface TeamMemberCardProps {
    name: string;
    position: string;
    description: string;
    initials: string;
    avatarBgColor?: 'pink' | 'blue' | 'green' | 'purple' | 'indigo' | 'teal';
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    name,
    position,
    description,
    initials,
    avatarBgColor = 'pink',
}) => {
    const avatarColorClasses = {
        pink: 'bg-gradient-to-r from-pink-400 to-purple-500',
        blue: 'bg-gradient-to-r from-blue-400 to-indigo-500',
        green: 'bg-gradient-to-r from-green-400 to-teal-500',
        purple: 'bg-gradient-to-r from-purple-400 to-pink-500',
        indigo: 'bg-gradient-to-r from-indigo-400 to-purple-500',
        teal: 'bg-gradient-to-r from-teal-400 to-blue-500',
    };

    const positionColorClasses = {
        pink: 'text-pink-600',
        blue: 'text-blue-600',
        green: 'text-green-600',
        purple: 'text-purple-600',
        indigo: 'text-indigo-600',
        teal: 'text-teal-600',
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg text-center min-h-full">
            <div className={`w-20 h-20 ${avatarColorClasses[avatarBgColor]} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                {initials}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className={`${positionColorClasses[avatarBgColor]} font-medium mb-3`}>{position}</p>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default TeamMemberCard;
