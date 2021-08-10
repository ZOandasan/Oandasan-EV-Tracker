export default function AccountPage({user}){
    return (
        <div>
            <h1>Account Page</h1>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </div>
    )
}