import React from "react";
import "./Stock.css";

const Stock = ({ paragraphs = [] }) => {
  const val = Object.values(paragraphs);
  var stocks = [];

  for (var i = 0; i < val.length; i++) {
    stocks.push(val[i].code + " : " + val[i].price);
  }

  return (
    <div>
      <h1>Stocks</h1>
      <h4>Stock and Prices</h4>
      {stocks.map(stock => (
        <p key={stock}>{stock}</p>
      ))}
    </div>
  );
};

export default Stock;
