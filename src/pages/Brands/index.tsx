import React from 'react';
import { BrandsContainer } from '../../components/BrandsContainer';
import {Container} from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';

const Brands = () => {
  return (
    <Container>
      <PageTitle>Brands</PageTitle>
      <BrandsContainer />
    </Container>
  );
};

export { Brands };
