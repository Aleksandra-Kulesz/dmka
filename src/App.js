import React from 'react';
import './App.scss';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import {Main} from "./components/Main";
import {About} from "./components/About";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Route exact path='/' component={Main}/>
                <Route exact path='/about' component={About}/>
            </div>
        </HashRouter>
    );
}

export default App;
