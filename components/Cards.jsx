import Web3 from 'web3';


function formatNumber(value) {
  return ('0' + value).slice(-2);
}


function formatMoney(value) {
  return Math.floor(parseFloat(Web3.utils.fromWei(value)) * 100) / 100;
}


const Card = ({
  date,
  children,
  onAction = null,
  actionTitle = 'More Details',
  actionEnabled = true,
}) => (
  <div className="draws__item">
    <div className="draws__frame">
      <div className="draws__date">
        {formatNumber(date.getDate())}.{formatNumber(date.getMonth() + 1)}.{formatNumber(date.getFullYear())}
      </div>
      <div className="draws__main-shadow">
        <div className="draws__main">
          {children}
        </div>
        {onAction ? (
          <div className="draws__buttons">
            <button disabled={!actionEnabled} className="btn btn-details" onClick={onAction}>
              <span className="btn-details__text">{actionTitle}</span>
              <span className="btn-details__shadow"></span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);


Card.Jackpot = ({jackpot}) => (
  <div className="draws__jackpot">
    <div className="draws__jackpot-frame">
      <div className="draws__jackpot-title">Jackpot</div>
      <div className="draws__jackpot-container">
        <div className="draws__jackpot-number">
          {formatMoney(jackpot)} {process.env.NEXT_PUBLIC_CURRENCY_NAME}
        </div>
      </div>
    </div>
  </div>
);


Card.Section = ({title, children}) => (
  <div className="card-section__out">
    <div className="card-section">
      <div className="card-section__title">{title}</div>
      <div className="card-section__body">{children}</div>
    </div>
  </div>
);


Card.Numbers = ({title, numbers, highlightedNumbers}) => (
  <div className="card-section__out">
    <div className="card-section">
      <div className="card-section__title">{title}</div>
      <div className="card-section__body">
        {numbers.map((number, index) => {
          const selected = highlightedNumbers?.includes(number);
          return (
            <div key={index} className={'card-section__item' + (selected ? ' card-section__item--selected' : '')}>
              <div className="card-section__text">{number}</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

Card.Numbers.defaultProps = {
  highlightedNumbers: [],
};


Card.NoWin = () => (
  <div className="prize prize--empty">
    <span className="prize__text">No Win!</span>
  </div>
);

Card.Prize = ({matches, prize}) => (
  <div className="prize">
    <div className="prize__title">You Won!</div>
    {prize !== null ? (
      <div className="prize__count">
        <div className="prize__count-text">Prize: {formatMoney(prize)}
          <span className="prize__line prize__line--left"></span>
          <span className="prize__line prize__line--right"></span>
        </div>
      </div>
    ) : null}
    <div className="prize__match">Matches: {matches}</div>
  </div>
);


export default Card;
