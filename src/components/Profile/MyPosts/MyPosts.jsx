import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы
import { Field, reduxForm } from 'redux-form';
import { requireField, maxLengthCreator } from '../../../utils/validators/validator';
import { FormControl } from '../../common/formsControls/formsControls';

const maxLength50 = maxLengthCreator(50);
const Textarea = FormControl('textarea')

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="text">
                <Field validate={[requireField, maxLength50]}
                component={Textarea}
                name="newPostText" 
                placeholder="Enter Your New Post" 
                id={classes.newPostTxt} />
            </div>
            <div>
                <button className={classes.btn}>Add Post</button>
            </div>
        </form>
    );
}

const MyPosts = (props) => {


    let onAddPost = (values) => {
        
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={classes.MyPosts}>
                My Posts
                <div className={classes.newPost}>
                    <ReduxAddNewPostForm onSubmit={onAddPost} />
                </div>
                <div className={classes.posts}>
                    {props.postsElements}
                </div>
            </div>
        </div>
    );

}


const ReduxAddNewPostForm = reduxForm({
    form: "addNewPost"
})(AddNewPostForm)

export default MyPosts;