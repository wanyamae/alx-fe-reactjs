import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    }

    return ( 
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                onClick={handleSubmit}
            >
                Register
            </button>
        </form>
    );
}

export default RegistrationForm;