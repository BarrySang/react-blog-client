function Header () {
    return (
        <div className="header-container">
            <h1>React Blog App</h1>
            <div className="authentication">
                <button className="f-r-header-element">[Login/Logout]</button>
                <p className="f-r-header-element">[Username]</p>
            </div>
        </div>
    )
}

export default Header