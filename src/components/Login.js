import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const initialValues = {
    username: '', 
    password: '',
    errorMessage : ''
};
const Login = () => {
    
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState();

    const handleChanges = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (formValues.username !== "Lambda" || formValues.password !== "School") {
            setError("Enter valid username and password")
        } 

        axiosWithAuth()
        .post('/api/login', formValues)
            .then((res) =>{
                console.log("Axios Login Post ", res)
                localStorage.setItem('token', res.data.payload)
                push('/View')
            })
            .catch((err) => {
                console.log({err})
                setFormValues({
                    ...state,
                    errorMessage: err.response.data.error 
                  })
            })
    }
    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
        </ModalContainer>
        <ModalContainer>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
            id="username"
            data-testid="username"
            name="username"
            value={formValues.username}
            onChange={handleChanges}
            />
            <label htmlFor="password">Password</label>
            <input
            id="password"
            data-testid="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChanges}
            />
            <button id="submit">login</button>
            </form>
        </ModalContainer>
        <p id="error">
{           state.errorMessage}
        </p>
    </ComponentContainer>
    );

}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
