import React from 'react';
import './App.css';
import Navigation from '../Navigation/index';
import Main from './Main/index';
import Footer from '../Footer/index';
import Homepage from '../Homepage/index';
import Gamebooks from '../Book-List/index';
import Login from '../Login/index';
import Logout from '../Logout/index';
import Register from '../Register/index';
import ErrorPage from '../Error-Page/index';
import Authors from '../Author-List/index';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Store, { StoreContext } from "../Store/store";
import { loginSuccess } from "../Store/actions";

function render(Cmp) {
    return function (props) {
        return (
            <Main>
                <Cmp {...props} />
            </Main>
        );
    };
}

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

                            return <div className="App">
                                <Navigation isLogged={isLogged} user={user} />
                                <div className="Container">
                                    <Switch>
                                        <Route path="/" exact render={render(Homepage)} />
                                        <Route path="/authors" exact render={render(Authors, { isLogged })} />
                                        <Route path="/gamebooks" exact render={render(Gamebooks, { isLogged })} />
                                        <Route path="/login" exact render={!isLogged ? render(Login, { isLogged }) : () => <Redirect to="/" />} />
                                        <Route path="/register" exact render={!isLogged ? render(Register, { isLogged }) : () => <Redirect to="/" />} />
                                        <Route path="/logout" exact render={isLogged ? render(Logout, { isLogged }) : () => <Redirect to="/" />} />
                                        <Route path="*"><Main><ErrorPage /></Main></Route>
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