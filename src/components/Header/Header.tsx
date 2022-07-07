import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import "./header.scss";

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
