

const Prepa = ({item1}) => {
    const {name,time,cal}=item1
    return (
        <div className="flex justify-between  my-2 items-center p-2 ">
        <h2>{name}</h2>
        <p>{time}</p>
        <p>{cal}</p>
 
        </div>
    );
};

export default Prepa;