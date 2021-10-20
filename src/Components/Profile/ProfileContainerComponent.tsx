import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from './ProfileComponent';
import {getUserProfile} from "../../Redux/Reducers/ProfileReducer";





// @ts-ignore
const ProfileContainerComponent = (props) => {
    debugger
    const {getUserProfile} = props;
    // @ts-ignore
    React.useEffect(
        () => {
            getUserProfile()
        }, []
    )


    return (
        // @ts-ignore
          props.user ? <ProfileComponent user={props.user} /> :<div>пользователь не был загружен</div>
    );
};


// @ts-ignore
let mapStateToProps = (state) => {
    // @ts-ignore
    return {user: state.profile.user}
}

// @ts-ignore
export default connect(mapStateToProps,{getUserProfile})(ProfileContainerComponent);