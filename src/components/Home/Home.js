import React from 'react';
import { Link } from 'react-router-dom';
import Allserves from '../AllServes/Allserves';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <h1 className="mt-5 color">WHAT WE DO</h1>
                <p className="text-wrap">We support people with intellectual disabilities by providing the care they need to feel safe and enjoy physical and emotional wellbeing throughout their lives. We seek to discover and honour their interests, talents, skills and aspirations so they can thrive and be included as genuine members of their local community and to live the life they choose.</p>
                <Link to="/about">
                    <button className="btn-about">ABOUT US</button>
                </Link>
            </div>
            <Allserves></Allserves>
            <Footer></Footer>
        </div>
    );
};

export default Home;