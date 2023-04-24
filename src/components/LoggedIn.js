const LoggedIn = ({ user, Logout }) => {
  return (
    <div className="welcome">
        <h2>Welcome, <span>Sean!</span></h2>
        <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default LoggedIn