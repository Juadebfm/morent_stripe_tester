import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../assets/logoJd.png";

const KEY = import.meta.env.VITE_STRIPE_KEY;

const Pay = () => {
  // stripe token
  const [stripeToken, setStripeToken] = useState(null);
  // navigation - router.push
  const navigate = useNavigate();

  const handleToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div>
      {stripeToken ? (
        <span>Processing Your Payment.... Please Wait</span>
      ) : (
        <StripeCheckout
          name="Morent E-Commerce"
          image={Logo}
          billingAddress
          shippingAddress
          description="Your Total Is Down Here"
          amount={20000}
          token={handleToken}
          stripeKey={KEY}
        >
          <div className="flex items-center justify-center h-screen w-full">
            <button className="px-16 py-5 bg-black text-white rounded-md hover:shadow-lg">
              Pay
            </button>
          </div>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
