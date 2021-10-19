import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>this is ServiceDetails{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;