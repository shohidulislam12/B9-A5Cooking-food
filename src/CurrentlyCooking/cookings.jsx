import { useState } from "react";
import Prepa from "./prepa";
const Cookings = ({preparing}) => {

    const newtime=preparing.reduce((sum,minit)=>sum+minit.time,0)
    const newcal=preparing.reduce((sum,minit)=>sum+minit.cal,0)
     
    return (
        <div>
             {/* currently cooking */}
             <h2 className="text-xl  p-4">Currently cooking:{preparing.length}</h2>
 <div className="border  border-gray-500 rounded-xl">
<div className="flex justify-between  ">
<h2>Name</h2>
<p>Time</p>
<p>Calories</p>
<p></p>
</div>
{
preparing.map(item1=><Prepa item1={item1}></Prepa>)
}
<div className="flex justify-between p-10">
<h2>total time:{newtime} </h2> 
<h2>total cal: {newcal}</h2>
</div>

 </div>
        </div>
    );
};

export default Cookings