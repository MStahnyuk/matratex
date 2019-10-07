import React, { Fragment } from 'react';
import Slider from '../components/Slider/Slider';
import Adventages from '../components/Adventages/Advantages';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import OurProducts from '../components/OurProducts/OurProducts';
import Distributors from '../components/Distributors/Distributors';
import LatestArticles from '../components/LatestArticles/LatestArticles';

const Main = () => {
    return (
        <Fragment>
            <Slider />
            <Adventages />
            <AboutCompany />
            <OurProducts />
            <Distributors />
            <LatestArticles />
        </Fragment>
    );
}

export default Main;
