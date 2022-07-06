import Header from "../components/Header/Header";
import ListInfo from "../components/List-info/List-info";
import { AppRoute } from "../const";
import "./Main-screen.scss";

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
        href={AppRoute.FLIGHT}>Начать путешествие</a>
      </div>  
      <div className="main-section__list-wrapper">
        <ListInfo />
      </div>
    </section>
    </>
  )
}

export default MainScreen;
