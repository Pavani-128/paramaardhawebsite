import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserServices.css";

const UserServices = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/services/")
            .then((response) => setServices(response.data))
            .catch((error) => console.error("Error fetching services:", error));
    }, []);

    return (
        <div className="services-container1">
            <h2 className="services-title">Our Services</h2>
            <div className="services-grid">
                {services.length > 0 ? (
                    services.map((service) => (
                        <div
                            key={service.id}
                            className="service-card1"
                            onClick={() => navigate(`/services/${service.id}`)} // Navigate on click
                            style={{ cursor: "pointer" }}
                        >
                            <img src={service.image} alt={service.name} className="service-image" />
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading services...</p>
                )}
            </div>
        </div>
    );
};

export default UserServices;
