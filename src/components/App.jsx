import Profile from 'components/Profile/Profile';
import user from '../user.json';
import Statistics from 'components/Statistics/Statistics';
import statistics from '../statistics.json';

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
    </div>
  );
};
export default App;
