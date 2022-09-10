import React, { FC } from 'react';
import s from './BrandsItem.module.scss';
import { IBrand } from '../../models/brands';

interface BrandsItemProps {
  brand: IBrand;
}

const BrandsItem: FC<BrandsItemProps> = ({ brand }) => {
  return (
    <div className={s.brands_item}>
      <img src={brand.img} alt={brand.title} />
    </div>
  );
};

export { BrandsItem };
