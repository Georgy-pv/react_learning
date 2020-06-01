import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        }) 
    }
    render() {
        return (
            <div>
                {this.state.editMode ? 
                <div className="">
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateEditMode } value={this.state.status} type="text" />
                </div>
                :
                <div className="">
                    <span style={{ height: 100, background: 'red' }} onDoubleClick={this.activateEditMode}>{this.props.status || "No Status"}</span>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;