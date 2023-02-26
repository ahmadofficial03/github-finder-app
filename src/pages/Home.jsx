import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch';

function Home() {
  return (
    <>
    <div className='background'>
    <UserSearch />
    <UserResults />
    </div>
    </>
  );
}

export default Home