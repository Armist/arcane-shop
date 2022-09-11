import React from 'react';
import Container from '../../components/Container';
import {BrandsCarousel} from "../../components/BrandsCarousel";
import {CategoriesContainer} from "../../components/CategoriesContainer";


const Home = () => {
    return (
        <Container>
            <BrandsCarousel/>
            <CategoriesContainer />
        </Container>
    );
};

export {Home};
