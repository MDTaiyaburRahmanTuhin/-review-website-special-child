import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Community.css'
const Community = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="row">
                <div className="col-md-8 first-part d-flex justify-content-center align-items-center">
                    <div className="text">
                        <h1>COMMUNITY IMPACT</h1>
                        <br />
                        <p className="text">When people feel included in their community they naturally develop and grow their talents and instincts. This provides immense value to the businesses in which they work, the groups they attend and the friends and family they interact with.
                            <br />
                            Diversity and inclusion breed productivity and innovation in our community and the ability to learn and grow from each other is exponentially expanded.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-2">
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Community;