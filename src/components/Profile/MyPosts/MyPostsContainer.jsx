import React from 'react';
import Post from './Post/Post';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


// const MyPostsContainer = (props) => {

//     return (
//         <StoreContext.Consumer> 
//             { (store) => {
//                 let profilePage = store.getState().profilePage;

//                 let postsElements = profilePage.postsData.map((p) => {
//                     return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
//                 })

//                 let onAddPost = () => {
//                     let action = addPostActionCreator();
//                     store.dispatch(action);
//                 }

//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action);
//                 }
//                 return <MyPosts profilePage={profilePage}
//                     postsElements={postsElements}
//                     addPost={onAddPost}
//                     updateNewPostText={onPostChange} />
//             }
//         }
//         </StoreContext.Consumer>

//     );
// }

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
        addPost: () =>{
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;