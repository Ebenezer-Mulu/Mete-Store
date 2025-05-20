"use client";

import React, { useState } from "react";
import Image from "next/image";
import PaymentModal from "./checkoutNowModal";

const paymentMethod = [
  {
    image: "/assets/telebirr.png",
    accountHolder: "Ebenezer Mulu",
    accountName: "Telebirr",
    accountNumber: "0941221536",
  },
  {
    image: "/assets/commerical.jpg",
    accountHolder: "Ebenezer Mulu",
    accountName: "Commercial Bank",
    accountNumber: "1000290293573",
  },
  {
    image: "/assets/abyssinia.png",
    accountHolder: "Ebenezer Mulu",
    accountName: "Abyssinia",
    accountNumber: "97249032",
  },
  {
    image: "/assets/cbe.jpg",
    accountHolder: "Ebenezer Mulu",
    accountName: "CBE Birr",
    accountNumber: "0941221536",
  },
];

const PaymentMethod = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<
    (typeof paymentMethod)[0] | null
  >(null);

  const handlePayNowClick = (method: (typeof paymentMethod)[0]) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Payment Methods
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 rounded-md shadow-md">
        {paymentMethod.map((method, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-100 rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="mb-3">
              <Image
                src={method.image}
                alt={`${method.accountName} Logo`}
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </div>
            <h3 className="text-md font-semibold text-gray-800">
              {method.accountName}
            </h3>
            <p className="text-sm text-gray-600">{method.accountHolder}</p>
            <p className="text-sm font-mono text-gray-700 mb-2">
              {method.accountNumber}
            </p>
            <p className="text-xs text-yellow-600 font-medium mt-1">
              ⚡ Instant Activation
            </p>
            <button
              onClick={() => handlePayNowClick(method)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Pay Now
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedMethod && (
        <PaymentModal
          selected={selectedMethod}
          onClose={() => {
            setShowModal(false);
            setSelectedMethod(null);
          }}
        />
      )}
    </div>
  );
};

export default PaymentMethod;
