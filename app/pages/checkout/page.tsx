"use client";

import React from "react";
import Image from "next/image";
import PaymentMethod from "app/components/paymentMethod";
import Link from "next/link";

const Checkout = () => {
  return (
    <div className=" md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-md shadow max-w-6xl mx-auto my-8 space-y-6 md:space-y-0">
      <div className="max-w-2xl ">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">
          Checkout Verification Fee
        </h2>
        <div className="flex flex-row items-start justify-between sm:flex-col gap-4">
          <p className="text-gray-400 text-lg max-w-md">
            The Checkout Page is the final step in the purchase process, choose
            a payment method, enter the transaction number, and attach the
            payment screenshot on our Telegram. This page ensures a secure,
            streamlined, and user-friendly experience to minimize cart
            abandonment and increase conversion rates.
          </p>
          <p className="text-gray-700 text-lg"></p>
        </div>

        <p className="mt-4 text-sm text-red-600 font-medium flex items-center">
          <span className="text-xl mr-1">❗</span>
          Use Your Own Account to make this Transfer
        </p>
      </div>

      <PaymentMethod />
      <div className="flex justify-end mt-4 mr-4">
        <div className="flex items-center gap-4 p-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white shadow-md cursor-pointer transition duration-200">
          <Image
            src="/assets/telegram.jpg"
            alt="Telegram icon"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Link href="https://t.me/E_Mete" className="font-medium text-lg ">
            Chat on Telegram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
