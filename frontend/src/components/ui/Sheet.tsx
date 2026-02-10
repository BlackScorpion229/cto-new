import React, { useEffect, useState } from 'react';

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  open = false,
  onOpenChange,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-lg border-l transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ children, asChild, className = '', ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

interface SheetHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({
  children,
  className = '',
}) => {
  return <div className={`px-6 py-4 border-b ${className}`}>{children}</div>;
};

interface SheetTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SheetTitle: React.FC<SheetTitleProps> = ({
  children,
  className = '',
}) => {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
};

interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SheetContent: React.FC<SheetContentProps> = ({
  children,
  className = '',
}) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

interface SheetFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const SheetFooter: React.FC<SheetFooterProps> = ({
  children,
  className = '',
}) => {
  return <div className={`absolute bottom-0 left-0 right-0 px-6 py-4 border-t ${className}`}>{children}</div>;
};
