import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './FriendsList.module.scss';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>{friends.map(FriendListItem)}</ul>
    )
};

export default FriendList;