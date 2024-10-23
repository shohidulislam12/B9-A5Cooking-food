import Cookings from "../CurrentlyCooking/cookings";
import Cookitems from "./cookitems";


const WantToCook = ({cook,handleWantPreparing,preparing}) => {

    return (
        <div className="col-span-1 p-2">
             <h2 className="text-xl  p-4">Want to cook:{cook.length}</h2>
 <div className="border  border-gray-500 rounded-xl">
<div className="flex justify-between  ">
<h2>Name</h2>
<p>Time</p>
<p>Calories</p>
<p></p>
</div>
{
cook.map(item=><Cookitems handleWantPreparing={handleWantPreparing} item={item}></Cookitems>)
}
 </div>


 <Cookings preparing={preparing}>

 </Cookings>
           
        </div>
    );
}; 

export default WantToCook;