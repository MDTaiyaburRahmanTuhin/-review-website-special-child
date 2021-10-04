import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Community from '../Community/Community';
import Footer from '../Footer/Footer';
import ServesCart from '../ServesCart/ServesCart';

const Serves = () => {
    const [serves, setServes] = useState([])
    useEffect(() => {
        fetch('./fakedata1.json')
            .then(res => res.json())
            .then(data => setServes(data))
    }, [])
    return (

        <div>
            <Banner></Banner>
            <div className="mt-5 pt-5">
                <h2 className="color">OUR FACILITIES</h2>
                <p>Form real friendships within a non-judgmental
                    environment</p>
            </div>
            <div className="row mt-5 pt-5 mb-5 pb-5">
                {
                    serves.map(servess => <ServesCart servess={servess}>
                    </ServesCart>)

                }

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Serves;