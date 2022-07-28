import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const data = [
    {
      description: "Car Insurance",
      price: 294.67,
      type: "Car",
      date: new Date(2022, 6, 22),
    },
    {
      description: "Tesco",
      price: 10.35,
      type: "Groceries",
      date: new Date(2022, 6, 23),
    },
    {
      description: "Gym",
      price: 20.99,
      type: "Health",
      date: new Date(2022, 6, 24),
    },
  ];

  return <ExpenseList data={data} />;
}

export default App;
