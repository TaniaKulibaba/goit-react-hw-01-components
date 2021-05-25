import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FrienList';
import TransactionHistory from './Transactions/Transactions';

import userData from '../data/user.json';
import statsData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


const App = () => {
    return (
    <div>
        <Profile
            name={userData.name}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}
            />
            <Statistics items={statsData} />
            <FriendList friends={friends} />
            <TransactionHistory transactions={transactions} />
    </div>
    )
};

export default App;