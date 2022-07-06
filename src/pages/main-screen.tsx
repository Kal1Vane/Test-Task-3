import Header from "../components/Header/Header";
import ListInfo from "../components/List-info/List-info";
import { AppRoute } from "../const";

function MainScreen() :JSX.Element {
  return (
    <>
    <Header />
    <section className="main-section">
      <div className="main-section__content">
        <h1 className="main-section__title">путешествие</h1>
        <h4 className="main-section__subtitle">на красную планету</h4>
        <a className="main-section__link" href={AppRoute.FLIGHT}>Начать путешествие</a>
      </div>  
      <div className="main-section__list-wrapper">
        <ListInfo />
      </div>
    </section>
    </>
  )
}

export default MainScreen;
