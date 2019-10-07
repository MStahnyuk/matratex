import React from 'react';
import classes from './Footer.scss';
import Menu from '../Menu/Menu';
import Contacts from '../Contacts/Contacts';
import Copyright from '../Copyright/Copyright';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.container}>
                <div className={classes.menu_wrap}>
                    <h3>Меню</h3>
                    <Menu className="footerMenu" />
                </div>

                <div className={classes.search}>
                    <input type="text" placeholder="Поиск" />
                </div>

                <Contacts />
                <Copyright />
            </div>
        </div>
    );
}
export default Footer;

