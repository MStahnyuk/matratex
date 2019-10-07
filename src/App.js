import React from 'react';
import Slider from './components/Slider/Slider';
import Adventages from './components/Adventages/Advantages';
import AboutCompany from './components/AboutCompany/AboutCompany';
import Distributors from './components/Distributors/Distributors';
import LatestArticles from './components/LatestArticles/LatestArticles';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main';

import Products from './pages/Products';

import { Switch, Route, withRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">

            {/* Header */}
            <Header />

            {/* Page */}

            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                
                <Route path={'/products'} >
                    <Products />
                </Route>
            </Switch>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default withRouter(App);
