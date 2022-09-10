import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchBrandsQuery } from '../../store/brands/brands.api';
import { BrandsItem } from '../BrandsItem';
import { Loader } from '../Loader';

import s from './BrandsContainer.module.scss';

const BrandsContainer = () => {
  const { isLoading, data } = useSearchBrandsQuery('');
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 2000);
  }, [time]);

  return (
    <div className={s.brands_container}>
      {isLoading ? <Loader /> : ''}
      {data && data.map((item) => <BrandsItem key={item.id} brand={item} />)}
    </div>
  );
};

export { BrandsContainer };
