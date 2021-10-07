
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


function NavBar({userLogin, loggedInUser, setIsLoggedIn, isLoggedIn}) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value})

    }

    const loginForm = 
        <form onSubmit={(e)=>userLogin(e, credentials)}>
            <input type="text" name="username" placeholder="Name" value={credentials.username} onChange={handleChange} />
            <input type="text" name="password" placeholder="Password" value={credentials.password} onChange={handleChange}/>
            <button type="submit" name="Submit">Login</button>
        </form>
    
    const loggedIn = 
        <Div>
            <h3>Hello {loggedInUser[0].username}</h3>
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Log Out</button>
        </Div>

    return(
        <Header>
            <h1>React-ionary</h1>
            {isLoggedIn ? loggedIn : loginForm}
            <NavLink to="/newuser">Create New User</NavLink>
            <br/>
        </Header>
    )
}

export default NavBar

const Header = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    background-color: #49b867;
    & h1 {
        margin: 0;
    }
    & input {
        height: 30px;
    }
    & a {
        background-color: #49b867;
        color: black;
        padding 10px;
        border-radius: 10px;
        text-decoration: none;
        
    }
    & a:hover {
        color: white;
        background-color: black;
    }
`

const Div = styled.div `
    display: flex;
    & h3 {
        margin: 0 5px;
    }
`