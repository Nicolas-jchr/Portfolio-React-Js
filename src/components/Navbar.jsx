import { NavLink } from "react-router-dom";
import LogoLinkedin from "../assets/linkedin.svg";
import LogoGithub from "../assets/github.svg";

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
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon">
                            <img src={LogoGithub} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
                            <img src={LogoLinkedin} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
