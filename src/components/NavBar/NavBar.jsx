import { Link } from "react-router-dom";
import './NavBar.css';
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {
    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (
    <nav>
        <Link to="/home">Home</Link> &nbsp; | &nbsp;
        <Link to="/national_index">National Dex</Link> &nbsp; | &nbsp;
        <Link to="/pokemon_bank">Pokemon Bank</Link> &nbsp; | &nbsp;
        <Link to="/about">About</Link> &nbsp; | &nbsp;
        <Link to="/settings">Settings</Link> &nbsp; | &nbsp;
        <Link to="/account">Account</Link> &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    );
}