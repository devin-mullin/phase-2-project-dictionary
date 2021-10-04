
function NavBar() {
    return(
        <div>
            <p>Header</p>
            <form>
                <input type="text" name="username" placeholder="Name" />
                <input type="text" name="password" placeholder="Password" />
                <button type="submit" name="Submit">Login</button>
            </form>
        </div>
    )
}

export default NavBar