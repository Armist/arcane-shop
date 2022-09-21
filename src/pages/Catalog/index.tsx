import React from 'react';
import { useParams } from 'react-router-dom';
import {Container} from '../../components/Container';

const Catalog = () => {
  let { category } = useParams();
  return (
    <Container>
      <h3>Catalog Page</h3>
      <h4>{category}</h4>
    </Container>
  );
};

export { Catalog };
