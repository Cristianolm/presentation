import React from "react";

interface ThemeButtonProps {
  checkedValue: boolean;
}
const ThemeButton: React.FC<ThemeButtonProps> = ({ checkedValue }) => {
  return (
    <label
      className={`relative flex cursor-pointer items-center ${
        checkedValue ? "hidden" : ""
      }`}
    >
      <input id="themeCheckbox" type="checkbox" className="peer sr-only" />
      <div className="peer flex h-8 w-12 items-center rounded-full  bg-zinc-300  object-scale-down px-1 shadow-inner after:relative  after:left-0 after:flex after:h-6 after:w-6 after:rotate-0 after:animate-moon after:rounded-full after:bg-zinc-100 after:bg-[url('/img/theme/moon.svg')] after:bg-center after:bg-no-repeat after:transition-all after:content-[''] peer-checked:after:left-4 after:peer-checked:rotate-180 after:peer-checked:animate-sun peer-checked:after:bg-[url('/img/theme/sun.svg')] dark:bg-zinc-700 dark:after:bg-zinc-800 sm:h-8 sm:w-14 sm:after:h-7 sm:after:w-7 md:h-10 md:w-20 md:after:h-9 md:after:w-9 md:peer-checked:after:left-9"></div>
    </label>
  );
};

export default ThemeButton;
