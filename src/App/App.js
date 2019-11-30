import React from 'react';
import './App.css';
import Navigation from '../Navigation/index';
import Footer from '../Footer/index';

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="Container">
                {/* <Header /> */}
                {/* <Main /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App;