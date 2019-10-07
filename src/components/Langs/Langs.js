import React from 'react';
import classes from './Langs.scss';

const Langs = () => {
    return (
        <div className={classes.Langs}>
            <a href="#" className={classes.lang + ' ' +  classes.active}>ru</a>
            <a href="#" className={classes.lang}>ukr</a>
        </div>
    );
}
export default Langs;

