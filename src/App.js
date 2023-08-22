import React, { Component } from "react";
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Cards from './Components/Crads.js'
import Owl from "./Components/Owl.js";
import LongBaner from './Components/LongBaner.js'
import Footer from './Components/Footer.js'

class App extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <Hero />
                <Cards />
                <Owl />
                <LongBaner />
                <Footer />

            </>
        );
    }
}

export default App;



