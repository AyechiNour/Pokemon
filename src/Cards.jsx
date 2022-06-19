import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Card from './Card';

const Cards = () => {
    const pok = {
      name :"",
      id:"",
      type:"",
      im:""
    }
    const [Data, setData] = useState([]);
    const  getPokemon =  async  () => {
      const res= await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      res.data.results.map(async(data,key) => {
        const response= await axios.get(data.url)
        setData((Data) => ([ ...Data, {
           id: response.data.id,
           name: data.name,
           type: response.data.types[0].type.name,
           img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`
         }]))
   
   
     })
    }
useEffect(() => {
  return () => {
    getPokemon()
  };
}, []);
    const Pokemons = Data.map((item,key)=>{
      return (
        <div key={key}>
          <Card item={item} />
        </div>
      )
    })
  return (
    <div className='grid grid-cols-6 justify-center'>{Pokemons}</div>
  )
}
export default Cards