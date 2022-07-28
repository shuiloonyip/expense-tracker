import PropTypes from "prop-types";
import "./ExpenseItem.css";

function ExpenseItem() {
  const description = "Car Insurance";
  const price = 294.67;
  const type = "Car";
  const date = new Date(2022, 6, 22);

  return (
    <div className="expense-item">
      <div className="expense-item__icon"></div>
      <div className="expense-item__info">
        <div className="expense-item__info-top">
          <div className="expense-item__description">{description}</div>
          <div className="expense-item__price">${price}</div>
        </div>
        <div className="expense-item__info-bottom">
          <div className="expense-item__type">{type}</div>
          <div className="expense-item__date">{date.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  description: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  date: PropTypes.object,
};

export default ExpenseItem;
