// AdmissionPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionPage = () => {
    return (
        <div className="admission-page">
            <h2>Student Admission</h2>
            <div className="cc">
                <div className="card">
                    <h3>New Admission</h3>
                    <p>Enroll a new student.</p>
                    <Link to="/admission/new">Go to New Admission</Link>
                </div>
                <div className="card">
                    <h3>Show Admission Details</h3>
                    <p>View and filter details of admitted students.</p>
                    <Link to="/admission/show">View Admission Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AdmissionPage;
