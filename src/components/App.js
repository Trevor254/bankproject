import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch("http://localhost:8004/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        return response.json()
      })
      .then((data) => setTransactions(data));
  }, []);

  // Add a new transaction to the state
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions} addTransaction={addTransaction} />
    </div>
  );
}

export default App;
