import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function AccountPage({user, setUser}){

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <div className="settings">
            <h1 className="head">Account Page</h1>
            <div>
                <p>User: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Not you? <Link to="" onClick={handleLogOut}>Log Out</Link></p>
            </div>
            <hr />
            <h2>Terms of Service:</h2>
            <hr />
            <div>
                <p>Text Here:</p>
            </div>
        </div>
    )
}