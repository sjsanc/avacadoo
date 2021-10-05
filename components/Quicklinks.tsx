import React from "react";

const links = ["Definitions", "Training"];

export default function Quicklinks() {
  return (
    <div className="quickbar pl-5 pt-5">
      <div className="p-3 bg-white rounded-lg border-2 border-gray-50 shadow-md w-full flex flex-col">
        <h2 className="text-center text-gray-300 pb-2">Course Links</h2>
        <ol>
          {links.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
