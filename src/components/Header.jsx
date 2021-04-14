import React from "react";

export default function Header() {
  return (
    <nav
      aria-label="top bar"
      className="flex-none flex justify-between bg-white h-16 shadow-lg fixed w-full pl-20"
    >
      <div
        aria-label="top bar left"
        aria-orientation="horizontal"
        className="flex items-center"
      >
        <p className="font-sans text-3xl ml-5 font-bold ...">
          iCube Test
        </p>
      </div>

      <ul
        aria-label="top bar right"
        className="px-8 flex items-center"
      >
      </ul>
    </nav>
  );
}
