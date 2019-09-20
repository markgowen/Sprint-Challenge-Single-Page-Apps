import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const char = res.data;
        console.log('Rick & Morti Characters', char)
        setChar(char);
        console.log(char)
      })
      .catch(error => {
        console.log('No characters returned', error);
      })
  }, []);

  return (
    <section className="character-list">
      {char.map(list => {
        return (
          <CharacterCard key={list.id}
          name={list.name}
          status={list.status}
          species={list.species}
          gender={list.gender}
          />
        )
      })}
    </section>
  );
}
