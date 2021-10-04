import React from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const LearnMore = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <div>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default LearnMore;