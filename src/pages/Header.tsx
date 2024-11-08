import '../Header.css';
import Logo from "../assets/logo.png";

export default function Header() {
    return(
        <header className="header">
            <img src={Logo} alt="Company Logo" className="logo" />
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header>
    )
}