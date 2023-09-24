import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import logo from './components/images/logo.png';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
function App() {
    return(
        <>
            <Header logo={logo}/>
            <div className='otogo'>
            <Navigation/>
            <Content/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
