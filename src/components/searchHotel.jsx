import { useState } from "react";
import SelectOption from "./formComponents/selectOption";
import Select from 'react-select';
import { useEffect } from "react";
export default function searchHotel(){
    const inputClass = "peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100";

    const labelClass = "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500";
    const [countries, setCountries] = useState(null);
    
    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) => {
            setCountries(data);
        });
    }, []);

    const roomRes = [
        { value: '1_room', label: '1 Room' },
        { value: '2_room', label: '2 Room' },
        { value: '3_room', label: '3 Room' },
        { value: '4_room', label: '4 Room' },
        { value: '5_room', label: '5 Room' },
    ]

    const selectStyle = {
        control: (state) =>
          state.isFocused ? 'border-red-600' : 'border-grey-300',
      }


    const countriesRes = countries ? countries.map(e => ({
        label: e.name, // Pastikan Anda mengakses properti yang benar, misalnya 'name'
        value: e.name  // Jika struktur data dari API sesuai
    })) : [];

    return(
        <div className="my-8">
            <div className="lg:mx-60 sm:mx-4">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="">
                        <Select name="country" options={countriesRes} isClearable={true} className="text-gray-700 text-sm" placeholder={'Your Country'}/>
                    </div>
                    <div className="relative h-10 w-full min-w-[200px]">
                        <input placeholder="City, Destination Area or Hotel Name" className={inputClass} />
                        <label className={labelClass}>
                            City, Destination Area or Hotel Name
                        </label>
                    </div>
                    <div className="">
                        <Select name="room" options={roomRes} placeholder={'Select Room'} className="text-gray-700 text-sm"/>
                    </div>
                </div>
            </div>
        </div>
    );
}