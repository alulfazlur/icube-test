import React from "react";

export default function Sidebar(props) {
  return (
    <>
      <nav className="bg-gray-900 w-20  justify-between flex flex-col h-full fixed">
        <div className="mt-5">
          <div className="mt-10">
            <ul>
              <li className="mb-12">
                  <span>
                    <svg
                      className="fill-none stroke-current h-5 w-5 mx-auto text-green-500 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
