import React from 'react';
import classes from './Advantages.scss';
import Adventage from '../Adventage/Advantage';

const Adventages = () => {
    return (
        <section className={classes.Advantages}>
            <div className={classes.container}>
                
                <Adventage
                    title={'Опыт'}
                    text={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper. Cras vitae volutpat elit. Proin dapibus mollis risus.'
                    } />

                <Adventage
                    title={'Развитие'}
                    text={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper. Cras vitae volutpat elit. Proin dapibus mollis risus.'
                    } />

                <Adventage
                    title={'Качество'}
                    text={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper. Cras vitae volutpat elit. Proin dapibus mollis risus.'
                    } />
                    
            </div>
        </section>
    );
}
export default Adventages;

