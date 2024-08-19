import { useContext } from "react";
import { productContex } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {

  const [products] = useContext(productContex);

  // /Find Unique Product Categories
  let differentCategory = products && products.reduce((acc,cv) => [...acc,cv.category],[]);
  differentCategory = [...new Set(differentCategory)]

  // For Unique Colored of Product Categories
  const getUniqueColor = () => {

  }


  return (
    <>
      <nav className="w-[20%] bg-zinc-100 h-full flex flex-col items-center">
        <a className="px-3 py-1 mt-5 border border-blue-300 text-blue-300 rounded">
          Add New Product
        </a>
        <hr className="bg-zinc-500 my-3 w-[80%]" />
        <h2 className="text-2xl mb-3 w-[80%] font-semibold">Category Filter</h2>
        <div className="w-[80%] flex flex-col gap-3">
        {differentCategory.map((cat,ind) => 
          <Link to={`/?category=${cat}`} key={ind} className="flex gap-2 items-center">
          <span className="rounded-full w-[18px] h-[18px] bg-green-100 " />
          {cat.toUpperCase()}
        </Link>)}
          
        </div>
      </nav>
    </>
  );
};

export default Nav;
