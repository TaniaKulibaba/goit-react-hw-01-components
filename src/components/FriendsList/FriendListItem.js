import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.scss';
import defaultImg from './default.png';


const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li key={id} className={styles.item}>
            <span className={styles.status} style={{ backgroundColor: isOnline? 'green': 'red' }}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
};

FriendListItem.defaultProps = {
    avatar: defaultImg,
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default FriendListItem;