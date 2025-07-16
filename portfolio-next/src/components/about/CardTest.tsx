import React from 'react';
import { GlobeIcon } from '../icons/icons';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, className }) => {
  return (
    <>
    <div className={`bg-white rounded-lg shadow-md p-4 cursor-pointer ${className}`}>
      <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">{title}</h3>
      <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">{description}</p>
    </div>
    </>
  );
};

export default Card;