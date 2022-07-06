import { useRef } from "react";
import { AppRoute } from "../../const";
import './Navigation.scss';

function Navigation () {

  function onClickNav(evt : React.MouseEvent<HTMLUListElement, MouseEvent>){
    evt.preventDefault();
  }
  
  const listRef = useRef<HTMLUListElement | null>(null);

  function onClickOpenBar(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const button = evt.currentTarget as HTMLElement;
    if(listRef.current){
      button.classList.toggle('open');
      const list = listRef.current as HTMLElement;
      list.classList.toggle('open');
    }
  }
  return (
    <nav  className="header__nav">
      <div className="header__mobail-sidebar">
        <button onClick={onClickOpenBar} type="button" className="header__mobail-button">
          <span>menu</span>
        </button>
      </div>
      <ul ref={listRef} onClick={onClickNav} className="header__nav-list">
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
