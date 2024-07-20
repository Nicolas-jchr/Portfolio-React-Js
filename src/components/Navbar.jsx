import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar-header">
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projets" activeClassName="active">
                            Mes projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/a_propos" activeClassName="active">
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
