'use client';

import { cn } from '../../utils/cn';
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  width: string
};

export const PrimaryButton = ({ children, onClick, className, type = 'button', width }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ width }}
      className={cn(
        `bg-[hsl(var(--color-primary))] text-white font-semibold px-5 py-2 rounded-2xl shadow-md transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-95 flex justify-center h-[40px]`,
        className
      )}
    >
      {children}
    </button>
  );
};
