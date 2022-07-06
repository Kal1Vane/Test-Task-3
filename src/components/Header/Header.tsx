import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <header className="header">
          <Logo />
          <Navigation />
        </header>
      </div>
    </div>
  );
}

export default Header;
