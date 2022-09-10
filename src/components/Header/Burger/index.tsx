import React from 'react';
import s from './Burger.module.scss';

interface BurgerProps {
  open: boolean;
  onClick: () => void;
}

export const Burger = ({ open, onClick }: BurgerProps) => {
  return (
    <div className={`${s.burger} ${open ? s.active : ''}`} onClick={onClick}>
      <div className={s.burger_inner}></div>
    </div>
  );
};
