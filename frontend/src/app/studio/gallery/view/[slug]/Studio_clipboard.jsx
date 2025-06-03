"use client";
import React, { useState } from "react";
import { FaClipboardCheck, FaClipboardList } from "react-icons/fa";

const Studio_clipboard = ({ slug }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://www.manishmahato.info.np/studio/gallery/view/${slug}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };
  return (
    <>
      <div title="Copy link" onClick={handleCopy} className=" cursor-pointer active:scale-95">
        {copied ? <FaClipboardCheck className=" text-gray-800 size-7" /> : <FaClipboardList className="text-gray-800 size-7" />}
      </div>
    </>
  );
};

export default Studio_clipboard;
