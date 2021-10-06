import NewUserForm from './NewUserForm'
import styled from 'styled-components'
import {useState} from 'react'

function NavBar({setShowForm}) {

    return(
        <Header>
            <form>
                <input type="text" name="username" placeholder="Name" />
                <input type="text" name="password" placeholder="Password" />
                <button type="submit" name="Submit">Login</button>
            </form>
            <button onClick={() => setShowForm(value => !value)}>Create New User</button>
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