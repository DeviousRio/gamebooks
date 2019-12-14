import React from 'react';
import './App.css';
import Navigation from '../Navigation/index';
import Footer from '../Footer/index';
import Homepage from '../Homepage/index';
import Gamebooks from '../Book-List/index';
import Login from '../Login/index';
import Register from '../Register/index';
import ErrorPage from '../Error-Page/index';
import Authors from '../Author-List/index';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Store, { StoreContext } from "../Store/store";
import { loginSuccess } from "../Store/actions";

function parseCookies() {
    return document.cookie.split("; ").reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split("=");
        acc[cookieName] = cookieValue;
        return acc;
    }, {});
}

const Auth = ({ children }) => {
    const { dispatch } = React.useContext(StoreContext);
    React.useEffect(() => {
        fetch("http://localhost:9999/auth", { credentials: "include" })
            .then(res =>
                res.status === 200
                    ? res.json()
                    : res.text().then(text => Promise.reject(text))
            )
            .then(user => dispatch(loginSuccess(user)))
            .catch(() => {
                dispatch(loginSuccess(null));
            });
    }, []);

    return <>{children}</>;
};

function App() {
    return (
        <BrowserRouter>
            <Store>
                <Auth>
                    <StoreContext.Consumer>
                        {({ state }) => {
                            console.log(state);
                            const { user } = state;
                            const isLogged = !!state.user;
                            console.log(user);

                            return <div className="App">
                                <Navigation isLogged={isLogged} user={user} />
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
                        }}
                    </StoreContext.Consumer>
                </Auth>
            </Store>
        </BrowserRouter>
    );
}

export default App;