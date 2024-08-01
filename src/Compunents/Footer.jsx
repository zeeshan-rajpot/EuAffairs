import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#F2F4F7] py-5 text-center flex items-center justify-center'>
        <p className='text-lg text-[#132238] me-2'>© 2024 EUAFFAIRS</p>
        <Link to='/PrivacyPolicy' className='text-lg text-[#132238] hover:underline  md:mx-10'>Privacy Policy</Link>
        <Link to='/Terms' className='text-lg text-[#132238] hover:underline '>TERMS & CONDITIONS</Link>
      
    </div>
  );
}

export default Footer;
