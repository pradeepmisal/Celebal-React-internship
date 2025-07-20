import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
      <span>{text1}</span>
      {text2 && (
        <>
          {" "}
          <span className="text-indigo-600">{text2}</span>
        </>
      )}
    </h2>
  );
};

export default Title;
