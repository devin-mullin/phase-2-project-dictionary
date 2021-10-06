
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


function NavBar({userLogin}) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value})

    }

   

    return(
        <Header>
            <form onSubmit={(e)=>userLogin(e, credentials)}>
                <input type="text" name="username" placeholder="Name" value={credentials.username} onChange={handleChange} />
                <input type="text" name="password" placeholder="Password" value={credentials.password} onChange={handleChange}/>
                <button type="submit" name="Submit">Login</button>
            </form>
            <NavLink to="/newuser">Create New User</NavLink>
            <br/>
        </Header>
    )
}

export default NavBar

const Header = styled.div `
    display: flex;
    margin: 10px 0;
    padding: 5px;
    background-color: #49b867;
`