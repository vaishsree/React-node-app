import React from "react";
import "./StockLog.css";

const StockLog = ({ time = " "}) => {
  return (
    <div>
      <h1>Log</h1>
      <h4>Log Time</h4>
      {time}
    </div>
  );
};

export default StockLog;