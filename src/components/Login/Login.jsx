import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { requireField } from '../../utils/validators/validator';
import { FormControl } from '../common/formsControls/formsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/formsControls/formsControls.module.css'

const Input = FormControl('input');

const LoginForm = (props) => {
    
    return (
            <form onSubmit={props.handleSubmit} action="">
                <div className="">
                    <Field validate={[requireField]} component={Input} name={"email"} type="text" placeholder={"Email"}/>
                </div>
                <div className="">
                    <Field validate={[requireField]} component={Input} name={"password"} type="password" placeholder={"Password"}/>
                </div>
                <div className="">
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember me
                </div>
                {props.error && <div className={style.formAllError}>{props.error}</div>}
                
                <div className="">
                    <button>Login</button>
                </div>
            </form>
    );
}


const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"} />
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login 
})(Login);