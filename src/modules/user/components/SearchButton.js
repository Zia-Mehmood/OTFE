import React from "react";

const SearchButton = () => {
  return (
    <div>
      <div class=" relative mt-4">
        <div class="relative">
          <input
            type="email"
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter your text"
          />
          <button
            class="absolute right-0 top-0 rounded bg-slate-800 h-full px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <img
              src={require("../../../assets/icons/search-white.png")}
              className="h-8   inset-y-0 cursor-pointer p-1.5"
              style={{ borderRadius: 50 }}
              alt="User Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchButton;
