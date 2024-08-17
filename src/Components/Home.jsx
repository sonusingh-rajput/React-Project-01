import { Link } from "react-router-dom";
import Nav from "./Nav";


const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-full flex flex-wrap p-10 overflow-x-hidden overflow-y-auto  ">
        <Link to="/details/1" className="border-sky-200 border mr-3 mb-3 w-[13vw] h-[25vh] shadow hover:scale-105 transition-all cursor-pointer">
          <div
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
            className="w-full h-[80%] bg-contain bg-no-repeat bg-center p-2"
          ></div>
          <p className="mt-2 font-semibold text-center hover:text-blue-400">
            Lorem id to sand pic
          </p>
        </Link>
      </div>
    </>
  );
};

export default Home;
