import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';


function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData;
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Submit form
            console.log('Form Data Submitted:', formData);
        }
    };

    const { username, email, password } = formData;

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            {errors.username && <div className="text-red-500 text-sm mb-2">{errors.username}</div>}
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            {errors.email && <div className="text-red-500 text-sm mb-2">{errors.email}</div>}
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            {errors.password && <div className="text-red-500 text-sm mb-2">{errors.password}</div>}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
                Register
            </button>
        </form>
    );
}

export default RegistrationForm;