import React from 'react';
import classes from './Advantage.scss';

const Adventage = ({ title, text}) => {
    return (
        <div className={classes.Advantage}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
    );
}
export default Adventage;

