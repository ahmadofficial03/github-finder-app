
function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">Github Finder</h1>
        <p className='mb-8 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.</p>
        <p className='text-lg text-black-400 mt-8'>
        Version: <span style={{color: '#D83A56'}}>1.0.0</span>
        </p>
        <p className='text-lg text-black-400'>
        Layout By:
            <a className="ml-1" style={{color: '#D83A56'}} href='https://ahmadofficials.netlify.app/'>
            Ahmad Fraz 
            </a>
        </p>
    </div>
  );
}

export default About