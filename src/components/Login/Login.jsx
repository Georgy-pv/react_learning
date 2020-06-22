import React from 'react';
import { reduxForm } from 'redux-form';

import { requireField } from '../../utils/validators/validator';
import { FormControl, createField } from '../common/formsControls/formsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/formsControls/formsControls.module.css'

const Input = FormControl('input');

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    
    return (
            <form onSubmit={handleSubmit} action="">
        
                {createField('Email', 'email', Input, [requireField], {type: "text"} )}
                {createField('Password', 'password', Input, [requireField], {type: "password"} )}
                {createField('Password', 'password', Input, [],{type: "checkbox"}, "Remember Me" )}

                {error && <div className={style.formAllError}>{error}</div>}
                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && createField('Symbols from image', 'captcha', Input, [], {}) }
                <div className="">
                    <button>Login</button>
                </div>
            </form>
    );
}


const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return (
        <div className="">
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>

    );
}

const ReduxLoginForm = reduxForm({
    form: 'login' 
  })(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {
    login 
})(Login);