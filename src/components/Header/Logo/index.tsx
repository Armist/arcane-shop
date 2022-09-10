import React from 'react';
import { Link } from 'react-router-dom';
import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <h2 className={s.logo}>
      <Link to="/">ARCANE</Link>
    </h2>
  );
};
