

const Cookitems = ({item,handleWantPreparing}) => {
    const {name,time,cal}=item
    return (
        <div className="flex justify-between  my-2 items-center p-2 ">
        <h2>{name}</h2>
        <p>{time}</p>
        <p>{cal}</p>
        <button onClick={()=>handleWantPreparing(item)}  className="btn bg-[#0BE58A]">Preparing</button>
        </div>
    );
};

export default Cookitems;