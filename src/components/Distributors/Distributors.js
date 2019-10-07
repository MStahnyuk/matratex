import React from 'react';
import classes from './Distributors.scss';
import mebel_market from '../../img/mebel_market.jpg';

const Distributors = () => {
    return (
        <section className={classes.Distributors}>
            <div className={classes.container}>

                <h2>Официальные дистрибьюторы</h2>
                <div className={classes.img_wrap}>
                    <img src={mebel_market} alt=""/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper
                </p>
                <p className={classes.last}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </section>
    );
}
export default Distributors;

