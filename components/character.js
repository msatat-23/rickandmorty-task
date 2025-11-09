"use client"

import { useEffect, useState } from "react";

const Character = ({ image, name, status, species, location, episode }) => {
    //location.name
    //episode[0] fetch result.name
    const [firstSeenIn, setFirstSeen] = useState('');
    useEffect(() => {
        const fetchFirstSeen = async () => {
            const res = await fetch(`${episode[0]}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await res.json();
            setFirstSeen(data.name);
        };
        fetchFirstSeen();
    }, []);

    const statusClassName = status === 'Dead' ? 'bg-red-500' : status === 'Alive' ? 'bg-green-500' : 'bg-gray-500';

    return <div className="rounded-lg flex flex-col sm:flex-row w-[600px] h-[480px] sm:h-[220px] bg-[#3C3E44] text-white  text-[16px]">
        <img src={image} className="h-[50%] sm:h-full rounded-t-lg sm:rounded-l-lg" />
        <div className="h-full w-full sm:w-[60%] py-4 px-4 flex flex-col justify-between items-start">
            <div className="gap-2 flex flex-col items-start">
                <h1 className="text-[24px] font-extrabold text-left hover:cursor-pointer hover:text-[#FF9800]">{name}</h1>
                <div className="flex justify-start gap-2 items-center">
                    <div className={`rounded-[50%] w-2 h-2 ${statusClassName}`} />
                    <p className="font-extralight">{status} - {species}</p>
                </div>
            </div>
            <div className="gap-2 flex flex-col items-start">
                <p className="text-[#9E9E9E]">Last known Location:</p>
                <p className="text-[18px] font-extralight hover:cursor-pointer hover:text-[#FF9800]">{location.name}</p>
            </div>
            <div className="gap-2 flex flex-col items-start">
                <p className="text-[#9E9E9E]">First seen in:</p>
                <p className="text-[18px] font-extralight hover:cursor-pointer hover:text-[#FF9800]">{firstSeenIn}</p>
            </div>
        </div>
    </div>
}
export default Character;