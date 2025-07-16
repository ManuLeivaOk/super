'use client';

import { cn } from '../../utils/cn';
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  width: string
};

export const SecondaryButton = ({ children, onClick, className, width }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{ width }}
      className={cn(
        `border border-[hsl(var(--color-secondary))] text-[hsl(var(--color-secondary))] font-semibold px-5 py-2 rounded-2xl transition-all duration-300 hover:bg-[hsl(var(--color-secondary))] hover:text-white hover:shadow active:scale-95 flex justify-center h-[40px]`,
        className
      )}
    >
      {children}
    </button>
  );
};
