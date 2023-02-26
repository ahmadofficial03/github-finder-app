import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";


function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,

  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full p-2'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
                <p className='flex-grow-0'>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {name}
                <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300 mx-2">{type}</span>

                {hireable && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Hireable</span>

                )}
              </h1>
              <p className="mt-3">{bio}</p>
              <div className='mt-4 card-actions bg-none w-60 border-2 text-center p-2 rounded'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-lg bg-base-100 stats">
                {location && (
                    <div className="stat p-2">
                        <div className="stat-title text-sm text-grey">Location</div>
                        <div className="text-lg stat-value">{location}</div>
                    </div>
                )}
                {blog && (
                    <div className="stat p-2">
                        <div className="stat-title text-sm text-grey">Website</div>
                        <div className="text-lg stat-value">
                            <a href={`https://${blog}`} target="_blank" rel="noreferrer">{blog}</a>
                        </div>
                    </div>
                )}
                {twitter_username && (
                    <div className="stat p-2">
                        <div className="stat-title text-sm text-grey">Twitter</div>
                        <div className="text-lg stat-value">
                            <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">{twitter_username}</a>
                        </div>
                    </div>
                )}
            </div>
            </div>
            </div>
            <div className="w-full card shadow-lg flex py-5 px-2 mb-6 rounded-lg shodow-md bg-base-100 stats">
                <div className="stat mx-8 py-4">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">
                        Followers
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{followers}</div>
                </div>

                <div className="stat mx-8 py-4">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends
                        className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">
                        Following
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{following}</div>
                </div>

                <div className="stat mx-8 py-4">
                    <div className="stat-figure text-secondary">
                        <FaCodepen
                        className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">
                        Public Repos
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{public_repos}</div>
                </div>

                <div className="stat mx-8 py-4">
                    <div className="stat-figure text-secondary">
                        <FaStore
                        className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">
                        Public Gists
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{public_gists}</div>
                </div>
            </div>
            </div>
    </>
  );
}

export default User;
