
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NewUserForm() {
    const [credentials, setCredentials] =useState({
        password: '',
        username: ''
    })
    
    function handleChange(e) {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        debugger;
        fetch('http://localhost:3001/Users', {
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" value={credentials.username} onChange={handleChange}/>
                <br/>
                <label>Password: </label>
                <input type="text" name="password" value={credentials.password} onChange={handleChange}/>
                <br/>
                <input type="submit" name="Submit" value="Create" />
            </form>
        </div>
    )
}

export default NewUserForm