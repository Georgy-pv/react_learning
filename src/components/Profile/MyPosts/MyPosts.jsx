import React, { PureComponent } from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы
import { Field, reduxForm } from 'redux-form';
import { requireField, maxLengthCreator } from '../../../utils/validators/validator';
import { FormControl } from '../../common/formsControls/formsControls';
import Post from './Post/Post';

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

// class MyPosts extends React.Component {



    

//     render(){
        
        
        
//     }
// }

const MyPosts = React.memo ((props) => {

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    let postsElements = props.posts.map((p) => {
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