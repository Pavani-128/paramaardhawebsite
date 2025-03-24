import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SubServices.css";

const SubServices = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/services/${serviceId}/`)
            .then((response) => setService(response.data))
            .catch((error) => console.error("Error fetching service details:", error));
    }, [serviceId]);
    

    return (
        <div className="subservices-container">
            {service ? (
                <>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>

                    <h3>Sub-Services:</h3>
                    <div className="subservices-grid">
                        {service.sub_services && service.sub_services.length > 0 ? (
                            service.sub_services.map((sub) => (
                                <div key={sub.id} className="subservice-card">
                                    <img src={sub.image} alt={sub.name} className="subservice-image" />
                                    <h4>{sub.name}</h4>
                                    <p>{sub.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No sub-services available.</p>
                        )}
                    </div>
                </>
            ) : (
                <p>Loading service details...</p>
            )}
        </div>
    );
};

export default SubServices;
