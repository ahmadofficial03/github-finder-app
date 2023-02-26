import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
    const [text, setText] = useState('');
    const {users, searchUsers, setClear} = useContext(GithubContext); 
    const {setAlert} = useContext(AlertContext);

    // CHANGE HANDLER:
    const handleChange = (e) => setText(e.target.value);

    // FORM SUBMIT:
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert("Please enter something", 'error');
        } else {
            // SEARCH USERS FUNCTION: THIS FUNCTION BRING USERS IN HERE FROM AND API ENDPOINT.
            searchUsers(text);
            setText('');
        }
    }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input 
                        type="text" 
                        className="w-full pr-40 bg-grey-200 input input-lg text-black py-2 pl-2 rounded"
                        placeholder="Search"
                        value={text}
                        onChange={handleChange}
                        />
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg bg-black text-white py-2">Go</button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (
            <div>
                <button onClick={setClear} className="btn btn-ghost btn-lg rounded py-2 px-4">Clear</button>
            </div>
        )}
    </div>
    
  )
}

export default UserSearch