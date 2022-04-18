import React from 'react';
import doctor from '../../../images/yuuji.jpg';
import './DoctorSharing.css'

const DoctorSharing = () => {
    return (
        <div className='doctor-info '>
            <div id="DoctorSharing" className='container d-flex flex-wrap align-items-center justify-content-center my-5'>
                <img className='doctor-image img-fluid' src={doctor} alt="" />
                <h1 className='px-5 doctor-share'>Sharing knowledge is my passion. Let's venture on this journey for the truth together... and have some fun along the way</h1>
            </div>
        </div>
    );
};

export default DoctorSharing;