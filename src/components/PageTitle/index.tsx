import React from 'react';
import s from './PageTitle.module.scss';

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
  return <h1 className={s.title}>{children}</h1>;
};

export { PageTitle };
