import React, { useState, useEffect } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'

export default function SearchForm() {
  // const [charName, setCharName] = useState([]);

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios
  //     .get('https://rickandmortyapi.com/api/character/')
  //     .then(res => {
  //       const charName = res.data.results;
  //       console.log('Rick & Morti Characters', charName)
  //       setCharName(charName);
  //       console.log(charName)
  //     })
  //     .catch(error => {
  //       console.log('No characters returned', error);
  //     })
  // }, []);

  // return (
  //   <div className='Container'>
  //     <div className='CardRow'>
  //       {charName.filter(list => {
  //         return (
  //           <CharacterCard key={list.id}
  //           name={list.name}
  //           />
  //         )
  //     })}
  //     </div>
  //   </div>
  // );
}
