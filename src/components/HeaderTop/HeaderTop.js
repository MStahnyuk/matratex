import React from 'react';
import classes from './HeaderTop.scss';
import Langs from '../Langs/Langs'; 

const HeaderTop = () => {
    return (
        <div className={classes.HeaderTop}>
            <div className={classes.container}>

                <div className={classes.topLeft}>
                    <a href="#" className={classes.location}>г.Киев, Украина</a>
                    <div className="timeWork">Пн-Сб 10:00 - 18:00</div>
                </div>

                <div className={classes.topRight}>
                    <a href="tel:+380501234567" className="phone">+38(050)-123-45-67</a>
                    <Langs />
                </div>
            </div>
        </div>
    );
}
export default HeaderTop;

