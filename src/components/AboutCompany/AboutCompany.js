import React from 'react';
import classes from './AboutCompany.scss';
import logo_ru from '../../img/logo-ru.png';
const AboutCompany = () => {
    return (
        <section className={classes.AboutCompany}>
            <div className={classes.container}>
                <div className={classes.text}>
                    <h3>О Компании</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper. Cras vitae volutpat elit. Proin dapibus mollis risus, eget commodo justo maximus non. Suspendisse sed tellus mi. Donec sem nulla, tristique ut libero eu, lacinia viverra orci. Vivamus ac porta arcu. Vestibulum a volutpat ex, ac molestie purus. Donec consectetur tortor nec molestie tempor. Aenean tristique velit ligula, eget egestas tortor maximus in.Vestibulum a volutpat ex, ac molestie purus. Donec consectetur tortor nec molestie tempor. Aenean tristique velit ligula, eget egestas tortor maximus in.</p>
                </div>
                <div className={classes.img_wrapper}>
                    <img src={logo_ru} width="736" height="117" alt=""/>
                </div>
            </div>
        </section>
    );
}
export default AboutCompany;

