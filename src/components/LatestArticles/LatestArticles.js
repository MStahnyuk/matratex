import React from 'react';
import classes from './LatestArticles.scss';
import latest_article_1 from '../../img/latest_article_1.jpg';
import latest_article_2 from '../../img/latest_article_2.jpg';
import latest_article_3 from '../../img/latest_article_3.jpg';
import LatestArticle from '../LatestArticle/LatestArticle';

const LatestArticles = () => {
    return (
        <div className={classes.LatestArticles}>
            <div className={classes.container}>
                <h2>Последние статьи</h2>
                <div className={classes.articles}>

                    <LatestArticle
                        img_src={latest_article_1}
                        title="Topic"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis posuere efficitur libero eget semper. Cras vitae volutpat elit.
                        Proin dapibus mollis risus."
                    />

                    <LatestArticle
                        img_src={latest_article_2}
                        title="Topic"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis posuere efficitur libero eget semper. Cras vitae volutpat elit.
                        Proin dapibus mollis risus."
                    />

                    <LatestArticle
                        img_src={latest_article_3}
                        title="Topic"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis posuere efficitur libero eget semper. Cras vitae volutpat elit.
                        Proin dapibus mollis risus."
                    />
                </div>
            </div>
        </div>
    );
}
export default LatestArticles;

