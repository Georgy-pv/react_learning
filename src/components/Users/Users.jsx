import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userImg from '../../assads/image/user-lock.jpg'

class Users extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount/ this.props.pageSize);
        let page = [];
        for(var i = 1; i < pageCount; i++){
            page.push(i);
        }
        return (
            <div className={classes.usersPage}>
                <div>
                    {page.map( p => {
                        return <span className={`${classes.page} ${this.props.currentPage === p && classes.selectedPage}`}
                        onClick={() => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div className={classes.userItem} key={u.id}>
                        <div>
                            <div className={classes.userImg} style={{ backgroundImage: u.photos.large != null ? `url(${u.photos.large})` : `url(${userImg})` }}>

                            </div>
                                {u.subscription
                                    ? <button className={classes.btn} onClick={() => { this.props.unFollow(u.id) }}>Unsubscribe</button>
                                    : <button className={classes.btn} onClick={() => { this.props.follow(u.id) }}>Subscribe</button>}
                        </div>

                        <div className={classes.userInfo}>
                            <div className={classes.userName}>
                                {u.name}
                            </div>
                            <div className={classes.userStatus}>
                                {u.status}
                            </div>
                        </div>
                        <div className={classes.userLocation}>
                            <span> {"u.location.country"}, </span>
                            <span> {"u.location.city"} </span>
                        </div>

                    </div>)
                }
            </div>
        );
    }
}

export default Users;