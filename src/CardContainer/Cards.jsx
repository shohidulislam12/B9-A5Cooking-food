import Card from "./Card";

import { useState } from "react"
import { useEffect } from "react"
const Cards = ({handleWantToCook}) => {
    const [cards,setCards]=useState([]);
useEffect (()=>{
  fetch('/public/recipies.json')
  .then((res)=>res.json())
  .then((data)=>setCards(data))
},[])


    return (
        
        <div className='col-span-2'>
            <h2>Cards Length : {cards.length}</h2>
        <div className="grid grid-cols-2">
        {
                cards.map(card=><Card handleWantToCook={handleWantToCook}  key={card.id} card={card}></Card>)
            }
        </div>
         
         
        </div>
    );
};

export default Cards;