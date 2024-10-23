import { useState } from "react"
import Cards from "./CardContainer/Cards"
import WantToCook from "./CardContainer/WantToCook"
import Header from "./Header/header"




function App() {
  const [cook,setCook]=useState([])
  const [preparing,setPreparing]=useState([])
  const handleWantToCook=(card)=>{



if(cook.includes(card)){
  return alert('item get already cooking')


}

else if (!cook.includes(card))
{const newCook=[...cook,card]
setCook(newCook)}
  }
const handleWantPreparing=(item)=>{
  const newPreparing=[...preparing,item]
    setPreparing(newPreparing)
    const preparingitem=cook.filter(items=>item!==item)
    setCook(preparingitem)


}

  return (
    <>
    <Header> </Header>
    <div className="grid grid-cols-3 container mx-auto p-5">
      <Cards handleWantToCook={handleWantToCook}></Cards>
      <WantToCook preparing={preparing} cook={cook} handleWantPreparing={handleWantPreparing}></WantToCook>
    
    </div>
 
    </>
  )
}

export default App
