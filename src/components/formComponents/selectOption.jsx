import React, { useEffect, useState } from "react";

export default function SelectOption(){
    const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        });
    }, []);
 
    const selectClick = () => {
        setOpen(!open);
        document.getElementById('searchInput').focus();     
    }

    return (
      <>
        <div className="font-medium h-80">
            <div
            onClick={selectClick}
            className={`bg-transparent w-full flex items-center justify-between rounded border border-blue-gray-200 text-gray-600 font-sans text-sm font-normal px-3 py-2 cursor-pointer ${
                !selected && "text-blue-gray-700"
            }`}
            >
            {selected
                ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
                : "Select Country"}
            {/* <BiChevronDown size={20} className={`${open && "rotate-180"}`} /> */}
            </div>
            <ul
            className={`bg-white bg-opacity-50 mt-2 overflow-y-auto ${
                open ? "max-h-60" : "max-h-0"
            } `}
            >
            <div className="flex items-center px-2 sticky top-0 bg-white opacity-50">
                {/* <AiOutlineSearch size={18} className="text-gray-700" /> */}
                <input id="searchInput"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder="Search"
                className="placeholder:text-gray-700 p-2 outline-none w-full"
                />
            </div>
            {countries?.map((country) => (
                <li
                key={country?.name}
                className={`p-2 text-sm hover:bg-[#002975] hover:text-white
                ${
                    country?.name?.toLowerCase() === selected?.toLowerCase() &&
                    "bg-[#002975] text-white"
                }
                ${
                    country?.name?.toLowerCase().startsWith(inputValue)
                    ? "block"
                    : "hidden"
                }`}
                onClick={() => {
                    if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(country?.name);
                    setOpen(false);
                    setInputValue("");
                    }
                }}
                >
                {country?.name}
                </li>
            ))}
            </ul>
        </div>
      </>
    );
}