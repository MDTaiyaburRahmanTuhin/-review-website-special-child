import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Allserves.css'
const Allserves = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (

        <div className="container">
            <h1 className="header-tital-color">ABOUT OUR SERVICES</h1>
            <p>We offer a wide range of services and programs for self advocates and their families on the North Shore. The purpose of our services is to ensure accessibility to resources and activities that engage individuals in meaningful, community-oriented programming while also offering support to their families.</p>
            <div className="lesson">
                <div className="row">
                    {
                        data.map(datas => <Cart
                            datas={datas}
                        >
                        </Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allserves;