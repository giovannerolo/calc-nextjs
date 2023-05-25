"use client";

import React from "react";

const Input = ({ value }) => {
  return (
    <div className="w-52 h-20 bg-slate-500 flex items-center justify-end text-2xl font-sans rounded-md">
      <input
        className="w-full h-20 bg-black text-white border-0 text-2xl py-0 px-3 rounded-md"
        disabled
        value={value}
      />
    </div>
  );
};

export default Input;
