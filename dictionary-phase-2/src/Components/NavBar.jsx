
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


function NavBar() {

    return(
        <Header>
            <form>
                <input type="text" name="username" placeholder="Name" />
                <input type="text" name="password" placeholder="Password" />
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