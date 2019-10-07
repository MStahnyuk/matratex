import React from 'react';
import classes from './HeaderBottom.scss';
import Menu from '../Menu/Menu';
import logo from '../../img/logo-eng.png';


const HeaderBottom = () => {
    return (
        <div className={classes.HeaderBottom}>
            <div className={classes.container}>
                <a className={classes.logo} href=""><img src={logo} alt=""/></a>
                <Menu className="headerMenu"/>
            </div>
        </div>
    );
}
export default HeaderBottom;

