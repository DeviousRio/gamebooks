import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/index';
import Footer from '../Footer/index';
import Homepage from '../Homepage/index';
import Gamebooks from '../Book-List/index';
import Login from '../Login/index';
import Register from '../Register/index';
import ErrorPage from '../Error-Page/index';
import Authors from '../Author-List/index';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <div className="Container">
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/authors" component={Authors} />
                        <Route path="/gamebooks" component={Gamebooks} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="*" component={ErrorPage} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;