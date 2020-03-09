import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => (
    //to use url query prams
    //<Link to={{ pathname: `/user/${props.user.login.username}`, search: "?dummy=hah" }} onClick={props.onClick}>
    //
    <Link to={{ pathname: `/user/${props.user.login.username}`, search: `?${props.query}` }} onClick={props.onClick}  className='box'>
        <img src={props.user.picture.thumbnail} alt='user image'/>
        <span>{props.user.login.username}</span>
    </Link>
);

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;