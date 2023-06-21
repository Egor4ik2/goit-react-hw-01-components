import React from 'react';
import styles from '../../css/profile/Profile.module.css';
import user from '../../data/user/user.json';
import friends from '../../data/friends/friends.json';
import transactions from '../../data/transaction/transactions.json';
import data from '../../data/data/data.json';
import FriendList from '../friendList/FriendList';
import Statistics from '../statistics/Statistics';
import TransactionHistory from '../transaction/Transaction';

const { username, tag, location, avatar, stats } = user;

const Profile = () => {
  const { followers = 0, views = 0, likes = 0 } = stats || {};

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>

      <FriendList friends={friends} />
      <Statistics title="Stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default Profile;
