
const Card = ({card,handleWantToCook}) => {
  
      const { id, time,img, desc,name,ingr, cal } = card;



    return (
        <div className="p-4 rounded-xl m-2 border border-gray-400">
             <img className="w-auto p-3 rounded-xl" src={img} alt="" />
            <h2 className="text-2xl">{name}</h2>

            <p className="text-gray-400">{desc}</p>
            <p className="test-2xl">Ingredients:{ingr.length}</p>
            <ul className="text-gray-400 p-4 " style={{listStyle:'bulet'}}>
                {
                    ingr.map((ing,ind)=><li key={ind}>{ing}</li>)
                }
            </ul>
            <span className="flex justify-between text-gray-500"><p>{time}minutes</p> <p>{cal} calories </p></span>
            <button onClick={()=>handleWantToCook(card)} className="btn bg-[#0BE58A]">Want to Cook</button>
        </div>
    );
};

export default Card;