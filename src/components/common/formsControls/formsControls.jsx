import React from 'react';
import style from './formsControls.module.css'

export const FormControl = Element => ({input, meta, ...props}) => {
    
    const showError = meta.touched && meta.error;
    return(
        <div className={`${style.formControl} ${showError ? style.error : ""}`}>
            <Element {...input} {...props} />
           {showError && <span>{meta.error}</span>}
        </div>
    );
}