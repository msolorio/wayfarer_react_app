import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Wayfarer</h1>

      <nav>
        <ul className="navList">
          <li><Link className="navLink" to="/">Home</Link></li>
          {/* FOR AUTH LESSON */}
          {/* <li className="navLink"><Link className="navLink" to="/login">Login</Link></li>
          <li className="navLink"><Link className="navLink" to="/signup">Signup</Link></li> */}
          <li><Link className="navLink" to="/cities">Explore</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
