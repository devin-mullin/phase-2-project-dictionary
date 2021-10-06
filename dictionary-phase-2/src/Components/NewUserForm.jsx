
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function NewUserForm() {
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
        alert('Thank you for signing up to use the dictionary.')
    }

    function addUser(username){
        console.log(username);
        fetch('http://localhost:3001/Users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(username)
        })
        .then(r => r.json())
        .then(newUser => {
        console.log(newUser)
         routeChange()
        })
    }
        


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange} value={credentials.username} />
                <br/>
                <label>Password: </label>
                <input type="text" name="password" onChange={handleChange} value={credentials.password} />
                <br/>
                <input type="submit" name="Submit" value="Create"/>
            </form>
        </div>
    )
}

export default NewUserForm