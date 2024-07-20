import { NavLink } from "react-router-dom";


function Navbar() {
    
    return (
        <>
            <header>
                <nav>
                <li>
                <NavLink to="/">
                Accueil
                </NavLink>
                </li>
                <li><NavLink to="/projets">
                Mes projets
                </NavLink>
                </li>
                <li><NavLink to="/a_propos">
                A Propos
                </NavLink></li>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
