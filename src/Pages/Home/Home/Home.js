import React from 'react';
import Banner from '../Banner/Banner';
import DoctorSharing from '../DoctorSharing/DoctorSharing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <DoctorSharing></DoctorSharing>
        </>
    );
};

export default Home;