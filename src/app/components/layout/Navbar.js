import '@/styles/nav-bar.scss';

export default function Navbar() {
  return (
    <nav className="nav-main">
      <div className="logo">Logo</div>
      <div>
        <ul>
          <li className="nav-main__item">
            <a href="#">Entdecken</a>
          </li>
          <li className="nav-main__item">
            <a href="#">Kategorien</a>
          </li>
          <li className="nav-main__item">
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
