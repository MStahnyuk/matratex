import React from 'react';
import classes from './Contacts.scss';
import Menu from '../Menu/Menu';
import FacebookIcon from '../FacebookIcon/FacebookIcon';
import GooglePlusIcon from '../GooglePlusIcon/GooglePlusIcon';
import YoutubeIcon from '../YoutubeIcon/YoutubeIcon';

const Contacts = () => {
    return (
        <div className={classes.Contacts}>
            <h3>Контакты</h3>
            <p>Пн-Сб 10:00 - 18:00</p>
            <a href="tel:+38(050)-123-45-67">+38(050)-123-45-67</a>
            <a href="mailto:example@mail.com">example@mail.com</a>
            <div className={classes.social}>

                {/* facebook */}
                <a className={classes.facebook} href="#" target="_blank">
                    <FacebookIcon />
                </a>

                {/* google-plus */}
                <a className={classes.googlePlus} href="#" target="_blank">
                    <GooglePlusIcon />
                </a>

                {/* youtube */}
                <a className={classes.youtube} href="#" target="_blank">
                    <YoutubeIcon />
                </a>
            </div>
        </div>
    );
}
export default Contacts;

