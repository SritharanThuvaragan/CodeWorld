import React, { Component } from 'react';
import Slider from '../inc/Slider';
import Mv from './includes/Mv';
import Footer from '../inc/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <section className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h4>Our Company</h4>
                                <div className='underline mb-3'></div>
                                <p>
                                    Welcome to Code wolrd, a leading software solutions provider dedicated to transforming businesses through technology. We specialize in crafting innovative, scalable, and user-friendly applications tailored to meet diverse industry needs.
                                </p>
                                <p>
                                    Our team of skilled professionals leverages the latest technologies to build powerful digital experiences, ensuring efficiency, security, and performance. Whether you're a startup looking to establish your digital presence or a corporation seeking enterprise-grade solutions, we deliver customized software to drive your success.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Mv />
                <section className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h4>Our Services</h4>
                                <div className='underline mb-3'></div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <div className='card-body'>
                                        <h6>Web Designing</h6>
                                        <div className='mb-3 sub-underline'></div>
                                        <p>
                                            We create visually stunning and highly functional websites that engage users and drive conversions. Our web design services focus on responsive layouts, intuitive navigation, and seamless user experience across all devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <div className='card-body'>
                                        <h6>Development</h6>
                                        <div className='mb-3 sub-underline'></div>
                                        <p>
                                            From custom software solutions to full-stack web and mobile app development, we provide robust, scalable, and high-performance applications tailored to your business needs. Our expertise covers React, Node.js, Python, and cloud-based technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <div className='card-body'>
                                        <h6>Digital Marketing</h6>
                                        <div className='mb-3 sub-underline'></div>
                                        <p>
                                            Our data-driven digital marketing strategies help businesses grow online. From SEO, social media management, content marketing, and paid advertising, we optimize your digital presence to boost brand awareness and generate leads.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Home;
