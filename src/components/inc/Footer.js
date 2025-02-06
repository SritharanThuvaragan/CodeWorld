import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='bg-dark text-white py-5'>
            <div className='container'>
                <div className='row'>
                    {/* Company Info */}
                    <div className='col-12 col-md-4 mb-4'>
                        <h6>Company Info</h6>
                        <hr />
                        <p>Code wolrd is a dynamic software company providing innovative digital solutions to help businesses succeed. We specialize in web design, development, and digital marketing strategies that create impactful online experiences.</p>
                    </div>

                    {/* Quick Links with Hover Effect */}
                    <div className='col-12 col-md-4 mb-4'>
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link className='text-decoration-none text-light quick-link' to="/">Home</Link></div>
                        <div><Link className='text-decoration-none text-light quick-link' to="/about">About Us</Link></div>
                        <div><Link className='text-decoration-none text-light quick-link' to="/contact">Contact Us</Link></div>
                    </div>

                    {/* Contact Information */}
                    <div className='col-12 col-md-4 mb-4'>
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p>123, Kachcheri Road, Jaffna</p></div>
                        <div><p>Land Number: 021 222 3333</p></div>
                        <div><p>Phone Number: +94 77 123 4567</p></div>
                        <div><p>Email: contact@cpv.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
