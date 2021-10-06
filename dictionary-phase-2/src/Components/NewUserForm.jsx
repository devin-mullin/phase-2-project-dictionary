
function NewUserForm() {
    return(
        <div>
            <form>
                <label>Username: </label>
                <input type="text" name="username" />
                <br/>
                <label>Password: </label>
                <input type="text" name="password" />
                <br/>
                <input type="submit" name="Submit" value="Create"/>
            </form>
        </div>
    )
}

export default NewUserForm