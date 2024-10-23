

const Header = () => {
    return (
        <div className="container mx-auto">
           {/* nav section   */}
           <div className="navbar bg-base-100">
  <div className="navbar-start">

    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
 <div className=" flex gap-5">
    <button className="btn">Home</button>
    <button className="btn">Recipes</button>
    <button className="btn">About</button>
    <button className="btn">Search</button>
 </div>
  <div className="navbar-end"> <input className="p-2" type="text" name="" id=""  placeholder="search"/> <button className="btn bg-transparent">search </button> 
    <a className="btn"> <i className="fa-solid fa-user"></i></a>
  </div>
</div>
{/* end nav section  */}
{/* hero section start */}
<div
  className="hero min-h-screen h-[400px]"style={{backgroundImage:` url('src/Header/images.jpeg')`}}
  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-3/4 mx-auto">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <button className="btn bg-[#0BE58A]">Explore Now</button>
      <button className="btn bg-transparent">Our Feedback</button>
    </div>
  </div>
</div>


<div className="text-center w-3/4 mx-auto">
    <h2 className="text-3xl  font-bold text-center">Our Recipes</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
</div>


        </div>
    );
};

export default Header;

