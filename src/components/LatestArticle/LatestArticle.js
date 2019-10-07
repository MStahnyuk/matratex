import React from 'react';
import classes from './LatestArticle.scss';

const LatestArticle = ({ img_src, title, text }) => {
    return (
        <div className={classes.LatestArticle}>
            <img src={img_src} width="232" height="137" alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}
export default LatestArticle;

