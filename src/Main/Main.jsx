import React from 'react';
import Nav from '../Components/Nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Container from '../Components/Shared/Container';

const Main = () => {
  const loaction = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div>
      <Container>
        <div>
          {noHeaderFooter || <Nav></Nav>}
          <div className=' min-h-[calc(100vh-68px)]'>
            <Outlet />
          </div>
          {/* Footer     */}

          <div >
            <Footer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;