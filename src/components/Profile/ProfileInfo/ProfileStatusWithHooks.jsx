import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false); 
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    
    return (
        <div>
            {editMode ?
                <div className="">
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} type="text" value={status} />
                </div>
                :
                <div className="">
                    <span onDoubleClick={activateEditMode}>{props.status || "No Status"}</span>
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;