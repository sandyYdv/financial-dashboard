import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CardList from "./components/CardList";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <CardList />
      <TransactionList />
      <ExpenseChart />
    </div>
  );
}

export default App;
