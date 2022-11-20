import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Registration() {
    const [data, setData] = useState({});

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        // console.log(validateEmail(e.target.form[0].value.toLowerCase()));
        // console.log(validatePassword(e.target.form[2].value));
        // console.log(validatePasswordConfirmation(e.target.form[2].value, e.target.form[3].value));
        e.target.form[4].disabled = !(validateEmail(e.target.form[0].value.toLowerCase()) && validatePassword(e.target.form[2].value) && validatePasswordConfirmation(e.target.form[2].value, e.target.form[3].value) && e.target.form[1].value.length > 0);
    }

    const submit = e => {
        e.preventDefault();
        alert("User " + data.username + " successfully registered!");
    }

    function validateEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    function validatePassword(password) {
        if (password.length < 7) {
            return false;
        }
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/.test(password);
    }

    function validatePasswordConfirmation(password, confirmPassword) {
        return password === confirmPassword;
    }

    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="form-group col-md-5" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input name="email" type="email" id="email" className="form-control border border-primary" required onChange={updateData} />
                    <br />
                    <label htmlFor="usesrname">Name: </label>
                    <input name="username" type="text" id="usernamename" className="form-control border border-primary" required onChange={updateData} />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <i style={{ "fontSize": "12px" }}> (must be at least 7 characters with 1 capital letter, 1 number and 1 special character)</i>
                    <input name="password" type="password" id="password" className="form-control border border-primary" minLength="7" required onChange={updateData} />
                    <br />
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input name="confirmPassword" type="password" id="confirmPassword" className="form-control border border-primary" required onChange={updateData} />
                    <br />
                    <button type="submit" className="btn btn-primary mx-auto d-block" disabled>Register</button>
                </div>
            </form>
        </div>
    );
}
