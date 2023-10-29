import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className={twMerge(
        'w-full gap-2 rounded-md border border-base-border bg-base-input px-4 py-3 text-base-text placeholder-base-label',
        'outline-none focus:ring-0',
        'focus-within:border-blue focus-within:ring-1 focus-within:ring-blue',
        props.className,
      )}
      {...props}
    />
  );
};

export { Input };
