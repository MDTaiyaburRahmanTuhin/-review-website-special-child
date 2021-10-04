import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/fakedata1.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="row">
                    {
                        data.map((datas => <div className="col-md-4" key={datas.id}>
                            <div className="card-about">
                                <h3 className="top">{datas.name}</h3>
                                <Link to={`/learn/${datas.id}`}>
                                    <button className="btn">LEARN MORE</button>
                                </Link>
                            </div>
                        </div>

                        ))}
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;