import React from "react";
import Logo from "../assets/logoJd.png";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <img src={Logo} alt="" className="w-24 h-25 mb-4" />
      <p className="px-16 py-5 bg-green-900 text-white rounded-md hover:shadow-lg">
        Successful
      </p>
      <p className="mt-4 w-[200px] text-center">
        Your Order is being prepared. Thanks for choosing Morent
      </p>
    </div>
  );
};

export default Success;
