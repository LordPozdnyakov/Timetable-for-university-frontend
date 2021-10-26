import React from 'react';
import { connect } from 'react-redux';

import ProfileComponent from './ProfileComponent';
import {getUserProfile} from "../../Redux/Reducers/ProfileReducer";

import { IUserType } from '../../Types';
import { AppStateType } from '../../Redux/Store';

type OwnPropsType = {

}

type mapStateType =  {
    user?: IUserType | null
}

type mapDispatchType = {
    getUserProfile: () => void
}

type PropsType = mapStateType & mapDispatchType;


const ProfileContainerComponent:React.FC<PropsType> = ({getUserProfile,user}) => {
    React.useEffect(
        () => {
            getUserProfile()
        }, [getUserProfile]
    )
    return (
          user ? <ProfileComponent {...user} /> :<div>пользователь не был загружен</div>
    );
};

let mapStateToProps = (state: AppStateType): mapStateType => {
    // @ts-ignore
    return {user: state.profile.user}
}



export default connect<mapStateType,mapDispatchType,OwnPropsType,AppStateType>(mapStateToProps,{getUserProfile})(ProfileContainerComponent);