import React from 'react';
import classes from './OurProducts.scss';
import our_products_1 from '../../img/our_products_1.jpg';
import our_products_2 from '../../img/our_products_2.jpg';
import our_products_3 from '../../img/our_products_3.jpg';
import our_products_4 from '../../img/our_products_4.jpg';
import our_products_5 from '../../img/our_products_5.jpg';
import BannerPhoto from '../BannerPhoto/BannerPhoto';

const OurProducts = () => {
    return (
        <section className={classes.OurProducts}>
            <div className={classes.container}>
                <h2>Наша продукция</h2>
                <div className={classes.photos}>
                    
                    <BannerPhoto src={our_products_1} />
                    <BannerPhoto src={our_products_2} />
                    <BannerPhoto src={our_products_3} />
                    <BannerPhoto src={our_products_4} />
                    <BannerPhoto src={our_products_5} />
                    
                </div>
            </div>
        </section>
    );
}
export default OurProducts;

