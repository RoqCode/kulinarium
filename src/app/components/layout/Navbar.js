import layout from '../../../styles/layout.module.scss';

export default function Navbar() {
  return (
    <nav className={`${layout.navMain}`}>
      <div className={layout.logo}>Logo</div>
      <div>
        <ul>
          <li className={layout.navMain__item}>
            <a href="#">Entdecken</a>
          </li>
          <li className={layout.navMain__item}>
            <a href="#">Kategorien</a>
          </li>
          <li className={layout.navMain__item}>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
