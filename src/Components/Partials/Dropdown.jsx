import React from "react";

const Dropdown = ({ title , options , fnc }) => {
  return (
    <div className="relative inline-block text-left h-fit w-40">
      <select 
      defaultValue={title}
      onChange={fnc}
      className="capitalize block appearance-none w-full bg-zinc-800 cursor-pointer border border-zinc-800 hover:border-zinc-700 px-5 py-3 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
        <option value={title} disabled={true}>
          {title}
        </option>
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item.replace(/_/g, ' ')}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-zinc-700 transition duration-300 ease-in-out">
        <svg
          className="fill-current h-4 w-4 fill-zinc-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
