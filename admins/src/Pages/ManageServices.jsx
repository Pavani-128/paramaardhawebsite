import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ManageServices = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [subServices, setSubServices] = useState([]);
    const [editingSubService, setEditingSubService] = useState(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/services/");
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    // Add or Update Service
    const onSubmitService = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        if (data.image.length > 0) {
            formData.append("image", data.image[0]); 
        }

        try {
            if (editingService) {
                await axios.put(`http://127.0.0.1:8000/api/services/${editingService.id}/`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Service Updated Successfully!");
            } else {
                await axios.post("http://127.0.0.1:8000/api/services/", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Service Added Successfully!");
            }
            reset();
            setEditingService(null);
            fetchServices();
        } catch (error) {
            console.error("Error saving service", error);
        }
    };

    // Delete Service
    const handleDeleteService = async (id) => {
        if (window.confirm("Are you sure you want to delete this service?")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/services/${id}/`);
                alert("Service Deleted Successfully!");
                fetchServices();
            } catch (error) {
                console.error("Error deleting service", error);
            }
        }
    };

    // Edit Service
    const handleEditService = (service) => {
        setEditingService(service);
        setValue("name", service.name);
        setValue("description", service.description);
    };

    // Fetch Sub-services when a service is selected
    const handleServiceClick = async (service) => {
        setSelectedService(service);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/subservices/?service_id=${service.id}`);
            console.log("Fetched Sub-services:", response.data);  // Debugging
            if (Array.isArray(response.data)) {
                setSubServices(response.data);
            } else {
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Error fetching sub-services:", error);
        }
    };
    
    
    

    // Add or Update Sub-service
    const onSubmitSubService = async (data) => {
        if (!selectedService) return alert("Select a service first!");
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        if (data.image.length > 0) {
            formData.append("image", data.image[0]);
        }
        formData.append("service", selectedService.id);

        try {
            if (editingSubService) {
                await axios.put(`http://127.0.0.1:8000/api/subservices/${editingSubService.id}/`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Sub-service Updated Successfully!");
            } else {
                await axios.post(`http://127.0.0.1:8000/api/subservices/`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Sub-service Added Successfully!");
            }
            reset();
            setEditingSubService(null);
            handleServiceClick(selectedService);
        } catch (error) {
            console.error("Error saving sub-service", error);
        }
    };

    // Delete Sub-service
    const handleDeleteSubService = async (id) => {
        if (window.confirm("Are you sure you want to delete this sub-service?")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/subservices/${id}/`);
                alert("Sub-service Deleted Successfully!");
                handleServiceClick(selectedService);
            } catch (error) {
                console.error("Error deleting sub-service", error);
            }
        }
    };

    // Edit Sub-service
    const handleEditSubService = (subService) => {
        setEditingSubService(subService);
        setValue("name", subService.name);
        setValue("description", subService.description);
    };

    return (
        <div>
            <h2>{editingService ? "Edit Service" : "Add New Service"}</h2>
            <form onSubmit={handleSubmit(onSubmitService)}>
                <input {...register("name")} placeholder="Service Name" required />
                <textarea {...register("description")} placeholder="Description" required />
                <input type="file" {...register("image")} />
                <button type="submit">{editingService ? "Update Service" : "Add Service"}</button>
            </form>

            <h2>Manage Services</h2>
            <div>
                {services.map((service) => (
                    <div key={service.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
                        <img src={service.image} alt={service.name} style={{ width: "200px" }} />
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <button onClick={() => handleEditService(service)}>Edit</button>
                        <button onClick={() => handleDeleteService(service.id)}>Delete</button>
                        <button onClick={() => handleServiceClick(service)}>Manage Sub-Services</button>
                    </div>
                ))}
            </div>

            {selectedService && (
                <div>
                    <h2>{editingSubService ? `Edit Sub-Service of ${selectedService.name}` : `Add Sub-Service for ${selectedService.name}`}</h2>
                    <form onSubmit={handleSubmit(onSubmitSubService)}>
                        <input {...register("name")} placeholder="Sub-Service Name" required />
                        <textarea {...register("description")} placeholder="Description" required />
                        <input type="file" {...register("image")} />
                        <button type="submit">{editingSubService ? "Update Sub-Service" : "Add Sub-Service"}</button>
                    </form>

                    <h3>Existing Sub-Services</h3>
                    {subServices.map((sub) => (
                        <div key={sub.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
                            <img src={sub.image} alt={sub.name} style={{ width: "100px" }} />
                            <h4>{sub.name}</h4>
                            <p>{sub.description}</p>
                            <button onClick={() => handleEditSubService(sub)}>Edit</button>
                            <button onClick={() => handleDeleteSubService(sub.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageServices;
