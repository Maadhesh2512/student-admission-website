import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdmissionForm({ addStudent }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        dob: '',
        email: '',
        phone: '',
        parentName: '',
        classToJoin: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(formData); 
        navigate('/admission/show');
    };

    return (
        <div className="formc">
            <form onSubmit={handleSubmit}>
                <h2>New Admission</h2>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
                <input type="date" name="dob" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" name="parentName" placeholder="Parent Name" onChange={handleChange} required />
                <input type="number" name="classToJoin" placeholder="Class to Join (1-12)" min="1" max="12" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AdmissionForm;
