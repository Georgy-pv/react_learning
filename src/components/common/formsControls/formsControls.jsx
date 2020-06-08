import React from 'react';
import style from './formsControls.module.css'
import { Field } from 'redux-form';

export const FormControl = Element => ({ input, meta, ...props }) => {

    const showError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${showError ? style.error : ""}`}>
            <Element {...input} {...props} />
            {showError && <span>{meta.error}</span>}
        </div>
    );
}

export const createField = (placeholder, name, component, validators, props, text) => {
    return (
        <div className="">
            <Field validate={validators}
                component={component}
                name={name}
                placeholder={placeholder}
                {...props} /> {text}
        </div>
    );

}