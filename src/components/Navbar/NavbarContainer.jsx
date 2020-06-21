import React from 'react';
import BestFriends from './BestFriends/BestFriends';
import Navbar from './Navbar';
import { connect } from 'react-redux';


// const NavbarContainer = (props) => {
//     let friendElements = props.store.getState().sidebar.bestfriends.map((f) => {
//         return <BestFriends name={f.name} imgSrc={f.img} />
//     });
//     return <Navbar friendElements={friendElements}/>
// }

let mapStateToProps = (state) => {
    return{
        friendElements: state.sidebar.bestfriends.map((f) => {
            return <BestFriends key={f.id} name={f.name} imgSrc={f.img} />
        })
    }
}

let mapDispatchToProps = () =>{
    return {

    }
}


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;