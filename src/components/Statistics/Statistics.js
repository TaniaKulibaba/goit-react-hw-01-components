import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

function getRandomColor() {
  const r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

const StatsListItem = ({ id, label, percentage }) => {
    return (
        <li key={id} className={styles.item} style={{backgroundColor: getRandomColor()}}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>

    )
};

const StatsList = ({ items }) => {
    return <ul className={styles.statsList}>{items.map(StatsListItem)}</ul>
};

const Statistics = ({ items }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>

            <StatsList items={items} />
        </section>
    )
};

Statistics.defaultProps = {
    title: ''
};

Statistics.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;