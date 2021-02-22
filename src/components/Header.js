import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Wayfarer</h1>

      <nav>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>Login</Link></li>
          <li><Link>Signup</Link></li>
          <li><Link></Link></li>
          <li><Link></Link></li>
        </ul>
      </nav>
    </header>
  )
}