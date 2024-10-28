import React, { useState } from 'react';

const ShowDetails = ({ students }) => {
    const [filter, setFilter] = useState('');

    const filteredStudents = students.filter(student =>
        student.firstName.toLowerCase().includes(filter.toLowerCase()) ||
        student.phone.includes(filter)
    );

    return (
        <div className="details">
            <input
                type="text"
                placeholder="Filter by First Name or Phone"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            {filteredStudents.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Parent Name</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.age}</td>
                                <td>{student.dob}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.parentName}</td>
                                <td>{student.classToJoin}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No students found.</p>
            )}
        </div>
    );
};

export default ShowDetails;
