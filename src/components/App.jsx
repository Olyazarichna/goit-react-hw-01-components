import Profile from 'components/Profile/Profile';
import user from '../user.json';
import Statistics from 'components/Statistics/Statistics';
import statistics from '../statistics.json';
import FriendList from 'components/FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
export default App;
