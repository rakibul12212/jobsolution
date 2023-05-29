import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer '>
            <div className='flex'>
            <div className='pl-20'>
                <h2 className='text-xl '>Backspace</h2>
                <p className='detail'>There are many variations of passages pfcareer opportunities.but the majority have suffered alternation in some form</p>
            </div>
            <div className='pl-20'>
                      <h3 className='text-xl'>Company</h3> 
                      <p>About us</p> 
                      <p>Work</p> 
                      <p>Latest News</p> 
                      <p>Career</p> 
            </div>
            <div className='pl-20'>
                      <h3 className='text-xl'>Product</h3> 
                      <p>Prototype</p> 
                      <p>Plans & Pricing</p> 
                      <p>Customers</p> 
                      <p>Intregations </p>
            </div>
            <div className='pl-20'>
                      <h3 className='text-xl'>Support</h3> 
                      <p>Helpdesk</p> 
                      <p>Sales</p> 
                      <p>Become a partner</p> 
                      <p>Developers</p>
            </div>
            <div className='pl-20'>
                <h3 className='text-xl'>Contact</h3>
                <p>524 Broadway ,NYC</p>
                <p>+1777-978-5570</p>
            </div>
        </div>
            <div className='flex pl-20'>
               <p>@2023 Backspace All Rights Reserved  </p>
            </div>
        </div>
    );
};

export default Footer;