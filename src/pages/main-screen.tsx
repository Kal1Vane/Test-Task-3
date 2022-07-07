import Header from "../components/header/header";
import ListInfo from "../components/list-info/list-info";

import { AppRoute } from "../const";
import "./main-screen.scss";

function MainScreen() :JSX.Element {
  return (
    <>
    <Header />
    <section className="main-section">
      <div className="main-section__content">
        <div className="main-section__header">
          <h1 className="main-section__title">путешествие</h1>
          <h4 className="main-section__subtitle">на красную планету</h4>
        </div>
        <a className="main-section__link" 
        onClick={(evt) => evt.preventDefault()}
        href={AppRoute.FLIGHT}>
          <span className="border__right-top"></span>
          <span className="border__left-bottom"></span>
          <span className="border__right-bottom"></span>
          <span className="border__left-top"></span>
          Начать путешествие</a>
      </div>  
      <div className="main-section__list-wrapper">
        <ListInfo />
      </div>
    </section>
    </>
  )
}

export default MainScreen;
