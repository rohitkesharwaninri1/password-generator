// CopyButton.js
import React from "react";
import { toast } from "react-toastify";

const CopyButton = ({ text, isPassword }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    console.log("click");
    toast.success("Copied to clipboard!");
  };

  return (
    <>
      <button
        disabled={!isPassword}
        className={`bg-sky-500 p-4 rounded-full text-white ${
          isPassword || "cursor-not-allowed bg-slate-300"
        }`}
        onClick={copyToClipboard}
      >
        Copy to Clipboard
      </button>
    </>
  );
};

export default CopyButton;
