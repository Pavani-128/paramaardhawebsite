import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SubServiceDetails.css";

const SubServiceDetails = () => {
    const { subServiceId } = useParams();
    const [subService, setSubService] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/subservices/${subServiceId}/`)
            .then((response) => setSubService(response.data))
            .catch((error) => console.error("Error fetching sub-service details:", error));
    }, [subServiceId]);

    return (
        <div className="subservice-details-container">
            {subService ? (
                <>
                    <h2>{subService.name}</h2>
                    <img src={subService.image} alt={subService.name} className="subservice-image" />
                    <p>{subService.description}</p>
                    
                    <h3>Package Details</h3>
                    <p>{subService.package_details}</p>

                    <h3>Pricing</h3>
                    <p>₹{subService.price}</p>

                    <button className="book-now-btn">Confirm Booking</button>
                </>
            ) : (
                <p>Loading sub-service details...</p>
            )}
        </div>
    );
};

export default SubServiceDetails;
