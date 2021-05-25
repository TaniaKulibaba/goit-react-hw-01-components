import React from 'react';
import Stats from './Stats';
import styles from './Profile.module.scss';
import PropTypes from 'prop-types';
import defaultImg from './default.png';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <div className={styles.profile} >
            <div className={styles.description} >
                <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
        
            <Stats {...stats} />
        </div>
    )
};

Profile.defaultProps = {
    avatar: defaultImg,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
};

export default Profile;