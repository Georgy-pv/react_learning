import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.newPostElement = React.createRef();
        this.onAddPost = () => {
            this.props.addPost()
        };
        this.onPostChange = () => {
            let text = this.newPostElement.current.value;
            this.props.updateNewPostText(text);
        };
    }
    render() {
        return (
            <div>
                <div className={classes.MyPosts}>
                    My Posts
                    <div className={classes.newPost}>
                        <div className="text">
                            <textarea ref={this.newPostElement} onChange={this.onPostChange} name="newPost"
                                id={classes.newPostTxt} value={this.props.profilePage.newPostText} />
                        </div>
                        <div>
                            <button onClick={this.onAddPost} className={classes.btn}>Add Post</button>
                        </div>
                    </div>
                    <div className={classes.posts}>
                        {this.props.postsElements}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyPosts;