import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdmissionForm from './components/AdmissionForm';
import ShowDetails from './components/ShowDetails';
import AdmissionPage from './components/AdmissionPage';

function App() {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Student Admission Portal</h1>} />
                    <Route path="/admission" element={<AdmissionPage />} />
                    <Route path="/admission/new" element={<AdmissionForm addStudent={addStudent} />} />
                    <Route path="/admission/show" element={<ShowDetails students={students} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
