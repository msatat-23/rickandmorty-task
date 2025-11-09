"use client"
import { useState } from "react";

const Search = ({ onSubmit }) => {
    const [searchText, setSearchText] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(searchText);
    };
    return <form onSubmit={submitHandler} className="w-[90%] lg:w-[800px] flex flex-col lg:flex-row justify-center gap-8 items-center mt-8 mb-16 mx-auto">
        <input
            type="search"
            value={searchText}
            placeholder="Seach For A Character"
            onChange={(e) => { setSearchText(e.target.value) }}
            className="w-full sm:w-[600px] h-[60px] rounded-md p-4 bg-white placeholder:text-2xl text-[24px]"
        />
        <button type="submit" className="w-[120px] h-[50px] rounded-lg bg-blue-700 hover:bg-blue-800 hover:cursor-pointer duration-300 text-[24px] font-bold">Search</button>
    </form>
};
export default Search;