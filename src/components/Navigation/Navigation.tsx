import { AppRoute } from "../../const";

function Navigation () {
  return (
    <nav  className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
            <a className="header__nav-link" href={AppRoute.MAIN}>Главная</a>
        </li>
        <li className="header__nav-item">
            <a className="header__nav-link" href={AppRoute.TECHNOLOGIES}>Технология</a>
        </li>
        <li className="header__nav-item">
            <a className="header__nav-link" href={AppRoute.FLIGHT}>График полетов</a>
        </li>
        <li className="header__nav-item">
            <a className="header__nav-link" href={AppRoute.GUARANTEES}>Гарантии</a>
        </li>
        <li className="header__nav-item">
            <a className="header__nav-link" href={AppRoute.ABOUT}>О компании</a>
        </li>
        <li className="header__nav-item">
            <a className="header__nav-link" href={AppRoute.CONTACTS}>Контакты</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation;
