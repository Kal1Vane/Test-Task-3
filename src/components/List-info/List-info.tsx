import './list-info.scss';

function ListInfo () :JSX.Element {
  return (
    
    <ul className="section__list-info">
      <li className="section__item-info">
        <span>мы</span>
        <span>1</span>
        <span>на рынке</span>
      </li>
      <li className="section__item-info">
        <span>гарантируем</span>
        <span>50%</span>
        <span>безопасность</span>
      </li>
      <li className="section__item-info">
        <span>календарик за</span>
        <span>2001 г.</span>
        <span>в подарок</span>
      </li>
      <li className="section__item-info">
        <span>путешествие</span>
        <span>597</span>
        <span>дней</span>
      </li>
    </ul>
  )
}

export default ListInfo;
