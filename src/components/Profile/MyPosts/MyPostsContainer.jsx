import React from 'react';
import Post from './Post/Post';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPostsContainer = (props) =>{
    let profilePage = props.store.getState().profilePage;
    //преобразование данных в jsx 
    let postsElements = profilePage.postsData.map((p) => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    }) 

    let onAddPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action =  updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }


    return <MyPosts profilePage={profilePage} postsElements={postsElements} addPost={onAddPost} updateNewPostText={onPostChange}/>
}

export default MyPostsContainer;