import React from 'react';
import './App.scss';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import {Main} from "./components/Main";
import {About} from "./components/About";
import {Bulletin} from "./components/Bulletin";
import {Contact} from "./components/Contact";
import {Recruitment} from "./components/Recruitment";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Route exact path='/' component={Main}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/bulletin' component={Bulletin}/>
                <Route exact path='/recruitment' component={Recruitment}/>
                <Route exact path='/contact' component={Contact}/>
            </div>
        </HashRouter>
    );
}

export default App;
