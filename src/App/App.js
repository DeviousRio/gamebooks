import React from 'react';
import './App.css';
import Navigation from '../Navigation/index';
import BookList from '../Book-List/index';
import Footer from '../Footer/index';

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="Container">
                <BookList />
                {/* <Header /> */}
                {/* <Main /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App;