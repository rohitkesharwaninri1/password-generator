// PasswordHistory.js
import React from "react";

const PasswordHistory = ({ history }) => {
  return (
    <div className="flex flex-col  items-center h-full ">
      <h2 className="font-bold text-lg mt-40 mb-4">Password History:</h2>
      <ul>
        {history.map((password, index) => (
          <li key={index}>
            {index + 1}. {password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordHistory;
