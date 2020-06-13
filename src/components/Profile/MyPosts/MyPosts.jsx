import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы
import { Field, reduxForm } from 'redux-form';
import { requireField, maxLengthCreator } from '../../../utils/validators/validator';
import { FormControl } from '../../common/formsControls/formsControls';
import Post from './Post/Post';

const maxLength50 = maxLengthCreator(50);
const Textarea = FormControl('textarea')

const AddNewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
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

const MyPosts = React.memo (({addPost, posts}) => {

    let onAddPost = (values) => {
        addPost(values.newPostText);
    }

    let postsElements = posts.map((p) => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    });


    return (
        <div>
            <div className={classes.MyPosts}>
                My Posts
                <div className={classes.newPost}>
                    <ReduxAddNewPostForm onSubmit={onAddPost} />
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
})


const ReduxAddNewPostForm = reduxForm({
    form: "addNewPost"
})(AddNewPostForm)

export default MyPosts;