import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function AccountPage({user, setUser}){

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <div>
            <h1>Account Page</h1>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>Not you? <Link to="" onClick={handleLogOut}>Log Out</Link></p>
            </div>
            <div>
                <h2>Terms of Service:</h2>
                <p>Text Here:</p>
            </div>
        </div>
    )
}