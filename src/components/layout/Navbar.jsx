import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content py-2'>
      <div className="container mx-auto flex">
        <div className="flex-none p-2 mx-2">
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end py-2">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn mr-2'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn mx-2'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar