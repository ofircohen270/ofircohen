import React from 'react';

import Footer from "./components/footer";
import Header from "./components/header/header";
import Skills from "./components/sections/skills";
import Hobbies from "./components/sections/hobbies";
import AboutMe from "./components/sections/aboutMe";
import Experience from "./components/sections/experience";
import ScrollToTopButton from "./components/scrollToTopButton";


import './App.css';

function App() {
    return (
        <div className="App">
            <ScrollToTopButton/>
            <Header/>
            <AboutMe/>
            <Experience/>
            <Skills/>
            <Hobbies/>
            <Footer/>
        </div>
    );
}

export default App;
