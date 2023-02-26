import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    
  // STATE: (REDUCER OBJECT)
    const initialState = {
      users: [],
      user: {},
      loading: false,
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // FETCHING THE GITHUB API.
    const searchUsers = async (text) => {

        setLoading()

        const params = new URLSearchParams({
          q: text,
        })
        console.log(params);
        console.log(GITHUB_URL);

        const response = await fetch(`https://api.github.com/search/users?${params}`, {
          headers: {
            Authorization: `token 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`
          }
        }) 
        if (response.ok) {  
          // GETTING DATA:
          const {items} = await response.json();
          // DISPATCH ACTIONS:
          dispatch({
            type: 'GET_USERS',
            payload: items,
          })
        } else {
          throw new Error('Data coud not be fetched!')
        }  
      }

      // GET SINGLE USER:
      const getUser = async (login) => {
        setLoading()

        const response = await fetch(`https://api.github.com/users/${login}`, {
          headers: {
            Authorization: `token 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`
          }
        }) 
        if (response.ok) {  
          // GETTING DATA:
          const data = await response.json();
          // DISPATCH ACTIONS:
          dispatch({
            type: 'GET_USER',
            payload: data,
          })
        } else if (response.status === 404) {
          window.location = './notfound'
        }else {
          throw new Error('Data coud not be fetched!')
        }  
      }

      // SET LOADING:
      const setLoading = () => dispatch({
        type: 'SET_LOADING',
      })

      // CLEAR USER:
      const setClear = () => dispatch({
        type: 'SET_CLEAR'
      })

      return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        setClear,
        getUser,

      }}>
        {children}
      </GithubContext.Provider>
}

export default GithubContext;

