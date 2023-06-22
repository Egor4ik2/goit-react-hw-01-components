
import React from 'react';


// import FriendList from './friendList/FriendList';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transaction/Transaction';
import friends from 'data/friends/friends.json';
import user from 'data/user/user.json';
import data from 'data/data/data.json';
import transactions from 'data/transaction/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};