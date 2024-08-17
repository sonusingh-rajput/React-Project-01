import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useContext } from "react";
import { productContex } from "../utils/Context";
import Loder from "./Loder";

const Home = () => {
  const [products] = useContext(productContex);

  return products ? (
    <>
      <Nav />
      <div className="w-full flex flex-wrap p-10 overflow-x-hidden overflow-y-auto  ">
        {products.map((p, i) => (
          <Link key={i}
            to={`/details/${p.id}`}
            className="border-sky-200 border mr-3 mb-3 w-[15vw] h-[30vh] shadow hover:scale-105 transition-all cursor-pointer p-2"
          >
            <div
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
              className="w-full h-[65%] bg-contain bg-no-repeat bg-center p-2"
            ></div>
            <p className="mt-3 font-semibold text-center hover:text-blue-400 text-sm overflow-hidden">
              {p.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loder />
  );
};

export default Home;
