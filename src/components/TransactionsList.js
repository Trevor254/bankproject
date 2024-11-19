import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item) => (
          <Transaction
            key={item.id}
            date={item.date}
            description={item.description}
            category={item.category}
            amount={item.amount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
