import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  fallback,
  size = 'md',
  className = '',
  children,
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-full bg-muted font-medium text-muted-foreground';
  
  return (
    <div className={`${baseClasses} ${sizeClasses[size]} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        fallback || (alt ? alt.charAt(0).toUpperCase() : '?')
      )}
      {children}
    </div>
  );
};
