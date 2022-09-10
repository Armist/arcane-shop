import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={s.button}>
      {icon}
      <span>{text}</span>
    </button>
  );
};
