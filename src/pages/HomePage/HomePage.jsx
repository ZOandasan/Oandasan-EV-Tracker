import * as userService from '../../utilities/users-service';

export default function HomePage({user}) {

  return (
    <>
      <h1>Home Page</h1>
      <span>Welcome, {user.name}</span>
      <div>
        <button>Create New Save</button>
        <button>Delete Existing Save</button>
      </div>
    </>
  );
}