import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData
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