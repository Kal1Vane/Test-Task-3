import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
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
