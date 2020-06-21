import React from 'react';
import classes from './ProfileInfo.module.css';
import { createField, FormControl } from '../../common/formsControls/formsControls';
import style from '../../common/formsControls/formsControls.module.css'
import { reduxForm } from 'redux-form';

const Input = FormControl('input');
const Textarea = FormControl('textarea');


const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>

            <div className={classes.description}>
                <button>SAVE</button>
                {error && <div className={style.formAllError}>{error}</div>}
                <span className={classes.name}>Full Name</span>
                {createField('Full name', 'fullName', Input, [])}
                <div className={classes.text}>
                    <div>
                        My contacts:
                        {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className="">
                        <b>{key}:  {createField(key, `contacts.${key}`, Input, [])}</b>
                    </div>
                })}

                    </div>
                    <div>
                        About Me: 
                        {createField('About Me', 'aboutMe', Textarea, [])}
                    </div>
                </div>
                <div>
                    Looking for a job: {createField('', 'lookingForAJob', Input, [], { type: 'checkbox' })}
                </div>
                <div>
                    My professional skills:
                    {createField('Professional skills', 'lookingForAJobDescription', Textarea, [])}
                </div>
            </div>
        </form>
    );
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataReduxForm