"use client";
import React, { useState } from "react";
import { FaClipboardCheck, FaClipboardList } from "react-icons/fa";

const Studio_clipboard = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };
  return (
    <>
      <div onClick={handleCopy} className=" ">
        {copied ? <FaClipboardCheck className=" text-gray-800 size-7" /> : <FaClipboardList className="text-gray-800 size-7" />}
      </div>
    </>
  );
};

export default Studio_clipboard;
