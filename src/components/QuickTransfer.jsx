import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const QuickTransfer = () => {
  const [amount, setAmount] = useState("");
  const { quickTransfer } = useAppContext();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSendClick = () => {
    alert(`Sending ${amount}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Quick Transfer</h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        {quickTransfer?.map((user) => {
          return (
            <div className=" space-x-4 mb-4">
              {/* User Avatars (replace with actual image elements) */}
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                {user?.avtar}
              </div>
              <div>
                <label className="block">{user?.name}</label>
                <label className="block">{user?.designation}</label>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-4 flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Write Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            className="form-input block w-full pr-10 border-gray-300 rounded-md"
            placeholder="525.50"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button
          className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
