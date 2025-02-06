import React, { Component } from 'react';
import Footer from '../inc/Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <section className='bg-primary text-center py-3'>
                    <h1 className='text-white'>Contact Us</h1>
                </section>
                <section className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62931.94949697224!2d79.93993262167972!3d9.659937600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe571cdef8b40b%3A0xa4d4b8ceebbd7931!2z4K6o4K6V4K6wIOCuruCuo-CvjeCun-CuquCuruCvjSB8IEphZmZuYSBUb3duIEhhbGw!5e0!3m2!1sen!2slk!4v1738792159027!5m2!1sen!2slk"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <div className='card-body py-4'>
                                        <h4>Send Your Idea</h4>
                                        <div className='underline mb-3'></div>
                                        <form>
                                            <div className='mb-3'>
                                                <label htmlFor="name">Name</label>
                                                <input className='form-control mb-3' type='text' id="name" placeholder='Enter your Name' />
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="email">Email</label>
                                                <input className='form-control  mb-3' type='email' id="email" placeholder='Enter your Email' />
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="message">Message</label>
                                                <textarea className='form-control  mb-3' id="message" rows="3" placeholder='Enter your Message'></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Contact;
