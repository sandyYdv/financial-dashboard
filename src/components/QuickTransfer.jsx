import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuickTransfer = () => {
  const [amount, setAmount] = useState("");
  const { quickTransfer } = useAppContext();

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSendClick = () => {
    alert(`Sending ${amount}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        {quickTransfer?.map((user, index) => {
          return (
            <div key={index} className=" space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src={user?.avtar}
                  alt="user image"
                  className="rounded-full"
                />
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
        <label className="block text-sm font-medium text-gray-700 mr-4">
          Write Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            className="form-input block w-full  border-gray-300 rounded-md py-2"
            placeholder="525.50"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button
          className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-5"
          onClick={handleSendClick}
        >
          Send <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
