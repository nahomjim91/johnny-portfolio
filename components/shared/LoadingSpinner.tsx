
// components/shared/LoadingSpinner.tsx
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black' | 'amber';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'amber' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    white: 'border-white border-t-transparent',
    black: 'border-black border-t-transparent',
    amber: 'border-amber-600 border-t-transparent'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`}
    />
  );
};
