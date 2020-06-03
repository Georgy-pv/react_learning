import React from 'react';
import Post from './Post/Post';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsElements: state.profilePage.postsData.map((p) => {
            return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
        }),
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) =>{
            let action = addPostActionCreator(newPostText);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;