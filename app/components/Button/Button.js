"use client";

import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 border-solid border-2 bg-amber-400 rounded-lg cursor-pointer w-12 m-0"
    >
      {label}
    </button>
  );
};

export default Button;
