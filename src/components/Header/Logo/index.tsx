import React from 'react';
import { Link } from 'react-router-dom';
import s from './Logo.module.scss';

interface LogoProps {
    color: string,
    size?: number
}

export const Logo = ({color, size}: LogoProps) => {
  return (
    <h2 className={s.logo} style={{fontSize: size}}>
      <Link to="/" style={{color}}>ARCANE</Link>
    </h2>
  );
};
