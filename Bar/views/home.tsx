import NavBar from './components/navbar'
import Hero from './components/home-image'
import Process from './components/process'
import Footer from './components/footer'

declare var require: any

var React = require('react');

export default function Home(props){
    return (
        <div>
            <NavBar />
            <Hero />
            <Process />
            <Footer />
        </div>


    );
}