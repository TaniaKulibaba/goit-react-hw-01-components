import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

function getRandomColor() {
  const r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
};

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statsList}>
                {stats.map((stats) => (
                    <li key={stats.id} className={styles.item} style={{backgroundColor: getRandomColor()}}>
                        <span className={styles.label}>{stats.label}</span>
                        <span className={styles.percentage}>{stats.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

Statistics.defaultProps = {
    title: ''
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;