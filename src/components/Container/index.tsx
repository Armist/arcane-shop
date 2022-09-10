import React from 'react';
import s from './Container.module.scss';

interface ContainerProps {
  children: any;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
