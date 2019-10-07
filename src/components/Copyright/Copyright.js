import React from 'react';
import classes from './Copyright.scss';

const Copyright = () => {
    return (
        <div className={classes.Copyright}>
            <p>© Matratex™ 2019</p>
            <a href="https://stubbs.pro/" target="_blank"><span>Developed </span>by Stubbs</a>
        </div>
    );
}

export default Copyright;
