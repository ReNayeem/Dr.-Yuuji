import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const { serviceId } = useParams();
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='img-fluid service-image' src={img} alt="" />
            <h2 className='service-title'>{name}</h2>
            <p className='service-description'><small>{description}</small></p>
            <p className='service-price'>Price: {price}</p>
            <Link to='/checkout'><button className='service-button'>Book: {name}</button></Link>
        </div>
    );
};

export default Service;