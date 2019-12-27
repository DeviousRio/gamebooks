import React from 'react';
import './App.css';
import Navigation from '../Navigation/index';
import Main from './Main/index';
import Auth from './Auth/index';
import Homepage from '../Homepage/index';
import CreateBook from '../Book-List/Book-Create/index';
import AddAuthor from '../Author-List/Author-Create/index';
import Gamebooks from '../Book-List/index';
import Login from '../Login/index';
import Logout from '../Logout/index';
import Register from '../Register/index';
import Authors from '../Author-List/index';
import Footer from '../Footer/index';
import News from '../News-List/index';
import ErrorPage from '../Error-Page/index';
import Store, { StoreContext } from "../Store/store";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function render(Cmp) {
    return function (props) {
        return (
            <Main>
                <Cmp {...props} />
            </Main>
        );
    };
}

function App() {
    return (
        <BrowserRouter>
            <Store>
                <Auth>
                    <StoreContext.Consumer>
                        {({ state }) => {
                            // console.log(state);
                            const { user } = state;
                            const isLogged = !!state.user;

                            return <div className="App">
                                <Navigation isLogged={isLogged} user={user} />
                                <div className="Container">
                                    <Switch>
                                        <Route path="/" exact render={render(Homepage)} />
                                        <Route path="/authors" exact render={render(Authors, { isLogged }, { user })} />
                                        <Route path="/gamebooks" exact render={render(Gamebooks, { isLogged })} />
                                        <Route path="/login" exact render={!isLogged ? render(Login, { isLogged }) : () => <Redirect to="/" />} />
                                        <Route path="/register" exact render={!isLogged ? render(Register, { isLogged }) : () => <Redirect to="/" />} />
                                        <Route path="/logout" exact render={isLogged ? render(Logout, { isLogged }) : () => <Redirect to="/" />} />
                                        <Route path="/create" exact render={render(CreateBook, { isLogged })} />
                                        <Route path="/add" exact render={render(AddAuthor, { isLogged })} />
                                        <Route path="/news" exact render={render(News)} />
                                        <Route path="*" exact render={render(ErrorPage)}></Route>
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