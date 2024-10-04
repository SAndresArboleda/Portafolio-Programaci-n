import { useState } from "react";
import "../Formulario4/Formulario4.css"



const Formulario4 = () => {

    //los campos que queremos agregar:
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    //para cambiar los campos:
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', form);
    }

    return (
        <div className='Formulario4'>
            <div className="register-card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit} className="register-form">

                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="lastName">Last Name: </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group full-width">
                        <button type="subtmit" className="register-button">Register</button>
                    </div>

                </form>

            </div >
        </div >

    )
}

export default Formulario4