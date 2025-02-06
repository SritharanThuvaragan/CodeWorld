import React from 'react';
import Mv from './includes/Mv';
import Footer from '../inc/Footer';

function Contact() {
    return (
        <div>
            <section className='bg-primary text-center py-3'>
                <h1 className='text-white'>About Us</h1>
            </section>
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>About Our Company</h4>
                            <div className='underline mb-3'></div>
                            <p>
                                Code wolrd is a leading software development company based in Jaffna. We are passionate about delivering top-tier digital solutions, offering a wide range of services including web design, custom software development, and digital marketing. 
                            </p>
                            <p>
                                Our team of experts is committed to creating innovative products that meet the unique needs of each client. We specialize in building user-friendly, responsive websites and applications that help businesses grow and thrive in the digital world. At Code Poda Vaa, we put our clients first, ensuring that every project is completed on time, within budget, and to the highest standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Mv/>
            <Footer/>
        </div>
    )
}

export default Contact;
