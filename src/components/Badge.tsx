import React from 'react';
import { cn } from '../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'purple' | 'outline' | 'gray';
}

export function Badge({ children, variant = 'primary', className, ...props }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    purple: 'bg-purple/10 text-purple',
    gray: 'bg-gray-100 text-gray-600',
    outline: 'border border-gray-200 text-gray-600',
  };

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
