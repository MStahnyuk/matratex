import React from 'react';
import classes from './Slider.scss';

const Slider = () => {
    return (
        <div className={classes.Slider}>
            <h1>Lorem ipsum</h1>
            <h2>Duis posuere efficitur libero eget semper.</h2>
            <div className={classes.arrows}></div>
            <button className={classes.more_info}>Подробнее</button>
            <div className={classes.switchers}>
                <div className={classes.elipse}></div>
                <div className={classes.elipse + ' ' + classes.active}></div>
                <div className={classes.elipse}></div>
            </div>
        </div>
    );
}
export default Slider;

