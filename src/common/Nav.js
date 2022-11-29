import { Link } from "react-router-dom"
import "./Nav.css";
import logo from "../assets/logo.png"

export default function Nav() {
    return (
        <header>
            <article>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                {/* <h1>
                    You<span>Tube</span>
                </h1> */}
            </article>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}