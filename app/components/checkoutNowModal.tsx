"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "hooks/useCart";

type PaymentMethodProps = {
  onClose: () => void;
  selected: {
    image: string;
    accountHolder: string;
    accountName: string;
    accountNumber: string;
  };
};

const PaymentModal: React.FC<PaymentMethodProps> = ({ onClose, selected }) => {
  const [transactionNumber, setTransactionNumber] = useState("");

  const { cartDetails } = useCart();
  const { total } = useCart();

  const handleConfirm = () => {
    if (!transactionNumber) {
      alert("Please enter the transaction number.");
      return;
    }
    console.log(
      "Submitted Transaction:",
      transactionNumber,
      "for",
      selected.accountName
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-md shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <Image
            src={selected.image}
            alt={`${selected.accountName} Logo`}
            width={100}
            height={40}
          />
        </div>

        <div className="bg-blue-100 text-center text-sm text-gray-800 p-3 rounded mb-4">
          Transfer <strong>{total}</strong> to{" "}
          <strong>{selected.accountNumber}</strong> and submit the form below
        </div>

        <label className="text-sm font-medium text-gray-700 block mb-1">
          Transaction Number{" "}
          <span className="text-gray-500">or Receipt No</span>{" "}
          <span
            className="text-blue-600 cursor-pointer"
            title="The receipt number you get after payment."
          >
            ℹ️
          </span>
        </label>

        <input
          type="text"
          value={transactionNumber}
          onChange={(e) => setTransactionNumber(e.target.value)}
          placeholder="----------------"
          className="w-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md px-3 py-2 mt-1 mb-4 text-center text-green-700 font-mono"
        />
        <p className="text-sm text-gray-600 mb-4 text-center">
          After confirming, please send your payment screenshot to our Telegram:
          <a
            href="https://t.me/E_Mete"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            Mete Store
          </a>
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            CANCEL
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            CONFIRM PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
