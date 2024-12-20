// Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative bg-[#000319]
             border-[1px] border-[#FFFFFF] 
             h-12 w-[200px] sm:w-[180px] md:w-[220px] 
             lg:w-[200px] text-white overflow-visible 
             rounded-sm hover:-translate-y-1 px-12 
             shadow-xl bg-background/30 
             box-shadow-[0_0_0_4px_#9b4d96] ${className}
            text-sm sm:text-base md:text-lg lg:text-xl
             `}
    >
      {text}
    </button>
  );
};

export default Button;
