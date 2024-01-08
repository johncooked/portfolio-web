import "./navbar.scss";

const Navbar = () => {
    const user = {
        name: "John Doe",
        profilePicture: "path/to/profile-picture.jpg",
        isLoggedIn: true, // or false if not logged in
    };

    return (
        <div className="navbar">
            <div className="logo">
                <span className="initials">PYD.</span>
            </div>
            <div className="right-section">
                {user.isLoggedIn ? (
                    <>
                        <div className="loggedin-container">
                            <div className="icons">
                                <img src="" alt="" className="icon" />
                            </div>
                            <div className="notification">
                                <img src="" alt="" className="icon" />
                                <span>1</span>
                            </div>
                            <div className="user-info">
                                <img src="" alt="" />
                                <span>{user.name}</span>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="loggedout-container">
                            <a href="/register" className="login-link">
                                Register
                            </a>
                            <a href="/login" className="login-link">
                                Login
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
