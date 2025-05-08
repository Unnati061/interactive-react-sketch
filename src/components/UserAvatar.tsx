
import React from 'react';

interface UserAvatarProps {
  letter?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  letter = 'C', 
  size = 'md',
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };
  
  return (
    <div 
      className={`${sizeClasses[size]} rounded-full bg-travel-orange flex items-center justify-center font-medium cursor-pointer`}
      onClick={onClick}
    >
      {letter}
    </div>
  );
};

export default UserAvatar;
