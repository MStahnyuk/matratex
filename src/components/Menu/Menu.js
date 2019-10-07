import React from 'react';
import classes from './Menu.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <ul className={classes.Menu + ' ' + classes[props.className]}>
            <li><Link to="/about-us/">О нас</Link></li>
            <li><Link to="/products/">Продукция</Link></li>
            <li><Link to="/news/">Новости</Link></li>
            <li><Link to="/where-buy/">Где купить</Link></li>
            <li><Link to="/contacts/">Контакты</Link></li>
            <li><Link to="/price-list/">Оптовый прайс-лист</Link></li>
        </ul>
    );
}
export default Menu;


