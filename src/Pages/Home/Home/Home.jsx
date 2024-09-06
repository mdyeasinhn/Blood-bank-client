import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../../../Components/ContactUs/ContactUs';
import DonationRequests from '../DonationRequests/DonationRequests';
import Container from '../../../Components/Shared/Container';

const Home = () => {
    return (
        <div>
    
       <Banner></Banner>
            <DonationRequests/>
           
            <ContactUs/>
    
        </div>
    );
};

export default Home;