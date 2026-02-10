import React from 'react';

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  collapsible = true,
  className = '',
  children,
}) => {
  return (
    <div className={`divide-y divide-border rounded-lg border ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<{index?: number; type?: string; collapsible?: boolean}>(child)) {
          return React.cloneElement(child, { index, type, collapsible });
        }
        return child;
      })}
    </div>
  );
};

interface AccordionItemProps {
  value: string;
  index?: number;
  type?: string;
  collapsible?: boolean;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
}) => {
  return <div data-value={value}>{children}</div>;
};

interface AccordionTriggerProps {
  index?: number;
  children: React.ReactNode;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    const content = contentRef.current;
    if (!header || !content) return;

    const handleClick = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    };

    header.addEventListener('click', handleClick);
    return () => header.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <div className={className}>
      <button
        ref={headerRef}
        className="flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-all hover:bg-muted/50"
      >
        {children}
        <svg
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: '0' }}
      >
        <div className="px-6 pb-4 text-muted-foreground">
          {/* Content would be rendered here */}
        </div>
      </div>
    </div>
  );
};

interface AccordionContentProps {
  index?: number;
  children: React.ReactNode;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
}) => {
  return <div className={`px-6 pb-4 text-muted-foreground ${className}`}>{children}</div>;
};
