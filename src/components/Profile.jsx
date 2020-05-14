import React from 'react';

const Profile = () =>{
    return (
        <div className="content">
            <div className="content__img-head">
                
            </div>
            <div className="content__profile-info">
                <div className="content__profile-ava">
                    <img className="content__profile-img" src="https://gamehag.com/static/avatar/3026582_max.jpg" alt=""/>
                </div>
                <div className="content__profile-description">
                    <span className="content__profile-name">John Wick</span>
                    <span className="content__profile-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae mollitia a reiciendis consequatur possimus at repudiandae quos rerum cum accusamus quidem qui aspernatur numquam adipisci nulla labore, tenetur odit!</span>
                </div>
            </div>
            <div>
                My Posts
                    <div>
                    New Post
                    </div>
                <div>
                    <div>
                        post1
                        </div>
                    <div>
                        post 2
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;