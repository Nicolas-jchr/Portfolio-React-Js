import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar-header">
            <nav className="navbar">
                <ul>
                    <li className="logo">
                        <NavLink to="/" activeClassName="active">
                            Nicolas <span className="highlight">JCHR</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" activeClassName="active">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projets" activeClassName="active">
                            Mes projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skill" activeClassName="active">
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon">
                            <img src="path/to/github/icon.png" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
                            <img src="path/to/linkedin/icon.png" alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
