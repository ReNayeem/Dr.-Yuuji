import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-page text-center container d-flex flex-column'>
            <h1 className='text-primary fw-bold about-me-name'>About Me</h1>
            <h2>Assalamualaikum. This is <span className='text-success'>Nayeem</span>. I'm studying B.Sc. in CSE at Daffodil Internation University. My goal is to become a professional WEB developer. To fulfill my goal I continuously working/studying/practicing hard where I can't even sleep 5 hours a day. So please pray for me to succeed.
            </h2>
            <h3 className='mt-3'>Thank you.🙂</h3>
        </div>
    );
};

export default About;