
import React from 'react';

import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        <li
          key={stats[0].id}
          className={css.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stats[0].label}</span>
          <span className={css.percentage}>{stats[0].percentage}%</span>
        </li>
        <li
          key={stats[1].id}
          className={css.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stats[1].label}</span>
          <span className={css.percentage}>{stats[1].percentage}%</span>
        </li>
        <li
          key={stats[2].id}
          className={css.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stats[2].label}</span>
          <span className={css.percentage}>{stats[2].percentage}%</span>
        </li>
        <li
          key={stats[3].id}
          className={css.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stats[3].label}</span>
          <span className={css.percentage}>{stats[3].percentage}%</span>
        </li>
        <li
          key={stats[4].id}
          className={css.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stats[4].label}</span>
          <span className={css.percentage}>{stats[4].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};