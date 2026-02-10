import React from 'react';

interface ProgressProps {
  value?: number;
  max?: number;
  className?: string;
  indicatorClassName?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  className = '',
  indicatorClassName = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-secondary ${className}`}>
      <div
        className={`h-full bg-primary transition-all duration-300 ease-in-out ${indicatorClassName}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
