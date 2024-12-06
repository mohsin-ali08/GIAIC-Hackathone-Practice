"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function AnnouncementBar() {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const selectLanguage = (language: string) => {
    console.log(`Selected Language: ${language}`);
    setLanguageDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="w-full bg-black text-white flex justify-center gap-6 items-center px-4 h-[40px] md:h-[50px] lg:h-[60px] relative">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <h1 className="text-xs md:text-sm lg:text-md xl:text-md">
          <span className="block md:hidden">
            Summer Sale - OFF 50%!
          </span>
          <span className="hidden md:block">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
        </h1>
        <button className="font-bold underline text-xs md:text-sm lg:text-md hover:text-yellow-600 transition">
          Shop Now
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 relative">
        <p className="text-xs md:text-sm lg:text-base">English</p>
        <button
          className="focus:outline-none"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-xs md:text-sm lg:text-base cursor-pointer"
          />
        </button>

        {/* Dropdown Menu */}
        {languageDropdownOpen && (
          <ul className="absolute top-full right-0 mt-2 bg-white text-black rounded-md shadow-lg w-40 z-10">
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => selectLanguage("English")}
            >
              English
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => selectLanguage("Spanish")}
            >
              Spanish
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => selectLanguage("French")}
            >
              French
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => selectLanguage("German")}
            >
             Urdu
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default AnnouncementBar;
