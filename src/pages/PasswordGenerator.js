/** @format */

// PasswordGenerator.js
import React, { useState } from "react";
import GeneratedPassword from "../components/GeneratedPassword";
import PasswordHistory from "../components/PasswordHistory";
import CopyButton from "../components/CopyButton";
import { toast } from "react-toastify";

const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordHistory, setPasswordHistory] = useState(
    localStorage.getItem("passwordHistory") || []
  );
  const [isPassword, setIsPassword] = useState(false);
  const [number, setNumber] = useState(false);
  const [chars, setChars] = useState(true);
  const [specialWord, setSpecialWord] = useState(false);

  function generateRandomPassword(length = 12) {
    const selectedCharsets = [];

    if (chars)
      selectedCharsets.push(
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    if (number) selectedCharsets.push("0123456789");
    if (specialWord) selectedCharsets.push("!@#$%^&*()_+");

    const charset = selectedCharsets.join("");
    console.log(charset);

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  }

  const generatePassword = () => {
    // Generate password logic here
    if (!chars && !number && !specialWord) {
      toast.error("Select at least one character set to generate a password.");
      return;
    }

    const newPassword = generateRandomPassword();
    setGeneratedPassword(newPassword);
    setPasswordHistory([newPassword, ...passwordHistory.slice(0, 4)]);
    setIsPassword(true);
    localStorage.setItem("passwordHistory", JSON.stringify(passwordHistory));
    // console.log("Mohit", generatedPassword, "history", passwordHistory);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-9/12 bg-sky-200 h-screen flex flex-col  justify-center items-center ">
          <GeneratedPassword password={generatedPassword} />
          <div className="flex">
            <button
              className="bg-sky-500 p-3 rounded-full mr-8 text-white"
              onClick={generatePassword}
            >
              {!isPassword ? `Generate` : "Re-Generate"} Password{" "}
              {isPassword && String.fromCharCode(8634)}
            </button>
            <CopyButton text={generatedPassword} isPassword={isPassword} />
          </div>
          {/* Check Box */}
          <div className="flex gap-4 mt-10">
            <label>
              <input
                type="checkbox"
                checked={chars}
                onChange={(e) => {
                  setChars(e.target.checked);
                  setGeneratedPassword("");
                  setIsPassword(false);
                }}
              />{" "}
              Include Alphabets
            </label>

            <label>
              <input
                type="checkbox"
                checked={number}
                onChange={(e) => {
                  setNumber(e.target.checked);
                  setGeneratedPassword("");
                  setIsPassword(false);
                }}
              />{" "}
              Include Numbers
            </label>

            <label>
              <input
                type="checkbox"
                checked={specialWord}
                onChange={(e) => {
                  setSpecialWord(e.target.checked);
                  setGeneratedPassword("");
                  setIsPassword(false);
                }}
              />{" "}
              Include Special Characters
            </label>
          </div>
        </div>

        <div className="w-full md:w-3/12 bg-sky-50">
          <PasswordHistory history={passwordHistory} />
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
