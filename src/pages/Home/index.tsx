import React from 'react';
import Container from '../../components/Container';
import { useSearchBrandsQuery } from '../../store/brands/brands.api';

const Home = () => {
  const { isLoading, isError, data } = useSearchBrandsQuery('');

  console.log(data);

  return (
    <Container>
      {isError && <p>Something went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      <div>
        {data?.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </Container>
  );
};

export { Home };
