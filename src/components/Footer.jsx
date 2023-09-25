import React from "react";

const Footer = () => (
  <footer className="absolute bottom-0 w-screen bg-gray-200 text-center lg:text-left rounded-lg ">
    <div className="p-4 text-center font-mono text-neutral-500 ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-600">
        © 2023{" "}
        <a href="/" class="hover:underline">
          QUERK
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
