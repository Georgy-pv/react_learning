import React from 'react';
import classes from './BestFriends.module.css';



const BestFriends = (props) => {
    
    return (
       <div className={classes.friend}>
           <img src={props.imgSrc} alt=""/>
           <div className={classes.name}>
                {props.name}
           </div>
       </div>
    );
}
export default BestFriends;