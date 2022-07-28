import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ data }) {
  return (
    <div className="container">
      <ExpenseItem
        description={data[0].description}
        price={data[0].price}
        type={data[0].type}
        date={data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        description={data[1].description}
        price={data[1].price}
        type={data[1].type}
        date={data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        description={data[2].description}
        price={data[2].price}
        type={data[2].type}
        date={data[2].date}
      ></ExpenseItem>
    </div>
  );
}

ExpenseList.propTypes = {
  data: PropTypes.array,
};

export default ExpenseList;
