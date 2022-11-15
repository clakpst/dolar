import React, { useState } from "react";
const Dollar = () => {
  const [dollarValue, setDollarValue] = new useState();
  return (
    <div>
      <input type="text" onChange={(e) => setDollarValue(e.target.value * 2)} />
      <div>{dollarValue}</div>
    </div>
  );
};

export default Dollar;
