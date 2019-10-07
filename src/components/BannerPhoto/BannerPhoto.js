import React from 'react';
import classes from './BannerPhoto.scss';

const BannerPhoto = ({src}) => {
    return (
        <div className={classes.img_wrap}>
            <img src={src} width="380" height="300" />
        </div>
    );
}
export default BannerPhoto;

