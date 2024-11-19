import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, addTransaction }) {
  const [query, setQuery] = useState("");

  // Filter transactions based on the query
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Search handleSearch={(e) => setQuery(e.target.value)} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
