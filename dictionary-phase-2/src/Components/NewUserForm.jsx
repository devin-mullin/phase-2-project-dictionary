
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function NewUserForm({addUser}) {
    const [credentials, setCredentials] =useState({
        username: '',
        password: ''
    })
    
    const history = useHistory()

    const routeChange = () => {
        let path = './'
        history.push(path)
    }

    function handleChange(e) {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addUser(credentials)
    }



    return(
        <div>
            <form onSubmit={handleSubmit} onClick={routeChange}>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange} value={credentials.username} />
                <br/>
                <label>Password: </label>
                <input type="text" name="password" onChange={handleChange} value={credentials.password} />
                <br/>
                <input type="submit" name="Submit" value="Create" />
            </form>
        </div>
    )
}

export default NewUserForm