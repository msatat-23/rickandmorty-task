"use client"
import Search from "@/components/search";
import Character from "@/components/character";
import { useEffect, useState } from "react";
export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      const data = await res.json();
      console.log(data);
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);


  const submitHandler = (value) => {
    console.log(value);
    const newcharacters = characters.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setCharacters(newcharacters);
  };
  return (
    <div className="mx-auto my-8 block w-full font-bold text-4xl text-black text-center">
      Rick And Morty Fetch Task
      <Search onSubmit={submitHandler} />
      {characters.length > 0 && <div className="w-full my-8 p-8 sm:p-0 flex justify-center gap-6 flex-wrap">
        {
          characters.map(item => <Character key={item.id} {...item} />)
        }
      </div>}
    </div>
  );
}
