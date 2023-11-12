import React, { Fragment, useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import UserContext, {useUserContext} from './userContext';
import NavigationBar from './NavigationBar';

export default function SignIn({ checkCredentials }) {

    const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useUserContext();

    const [credentialsForm, setcredentialsForm] = useState({
        userName: '',
        password: ''
    });

    const inputChangedHandler = (e) => {
        credentialsForm[e.target.name] = e.target.vale;
    }

    const formSubmitted = (e) => {
        e.preventDefault();
        checkCredentials(credentialsForm);
        setcredentialsForm({
            userName: '',
            password: ''
        })
    }

    const { userName, password } = checkCredentials;
    return (
        <Fragment>
            <NavigationBar isLoggedIn={isLoggedIn} isAdmin={isAdmin}></NavigationBar>
            <ValidatorForm onSubmit={formSubmitted}>
                <TextValidator
                    id='userName'   //like a label
                    label="Enter Username"
                    type='text'
                    name="name"
                    value={userName}
                    onChange={inputChangedHandler}
                    validators={['required']}
                    errorMessages={['Name cannot be empty']}
                >
                </TextValidator>

                <TextValidator
                    id='password'  //like a label
                    label="Enter password"
                    type='password'
                    name="password"
                    value={password}
                    onChange={inputChangedHandler}
                    validators={['required']}
                    errorMessages={['password cannot be empty']}
                ></TextValidator>
            </ValidatorForm>
        </Fragment>
    );
}