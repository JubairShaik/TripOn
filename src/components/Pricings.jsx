import React from "react";
import PriceCard from "./PriceCard";

const Pricings = ({ pricingapi: { title, text, btn1, btn2, plans } }) => {
  return (
    <>
      <div className="my-16 bg-red-5400   relative">
        <div className="travigo-container">
          <div className="grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
            <p className="text-xl lg:text-sm text-gray-100">{text}</p>
            <div className="ring-1  z-10 ring-slate-100 rounded-full py-1.5 px-2 flex items-center 
            justify-between gap-5 my-5 shadow-md shadow-slate-200">
              <button type="button" className="button-light  sm:w-auto">
                {btn1}
              </button>
              <button
                type="button"
                className=" z-10 sm:w-auto button-light shadow-slate-200 bg-slate-100"
              >
                {btn2}
              </button>
            </div>
          </div>

          <div className="grid items-center  md:grid-cols-2 grid-cols-1 w-full sm:max-w-[860px]    gap-9 lg:gap-5 m-auto">
            {plans?.map((plan, i) => (
              <PriceCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricings;
