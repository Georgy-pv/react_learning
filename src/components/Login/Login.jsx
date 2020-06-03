import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { requireField } from '../../utils/validators/validator';
import { FormControl } from '../common/formsControls/formsControls';

const Input = FormControl('input');

const LoginForm = (props) => {
    
    return (
            <form onSubmit={props.handleSubmit} action="">
                <div className="">
                    <Field validate={[requireField]} component={Input} name={"email"} type="text" placeholder={"Email"}/>
                </div>
                <div className="">
                    <Field validate={[requireField]} component={Input} name={"password"} type="text" placeholder={"Password"}/>
                </div>
                <div className="">
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me
                </div>
                <div className="">
                    <button>Login</button>
                </div>
            </form>
    );
}


const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return (
        <div className="">
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>

    );
}

const ReduxLoginForm = reduxForm({
    form: 'login' 
  })(LoginForm);

export default Login;