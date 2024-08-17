const Nav = () => {
  return (
    <>
      <nav className="w-[20%] bg-zinc-100 h-full flex flex-col items-center">
        <a className="px-3 py-1 mt-5 border border-blue-300 text-blue-300 rounded">
          Add New Product
        </a>
        <hr className="bg-zinc-500 my-3 w-[80%]" />
        <h2 className="text-2xl mb-3 w-[80%] font-semibold">Category Filter</h2>
        <ul className="w-[80%] flex flex-col gap-3">
          <li className="flex gap-2 items-center">
            <span className="rounded-full w-[18px] h-[18px] bg-green-100 " />
            Cart 1
          </li>
          <li className="flex gap-2 items-center">
            <span className="rounded-full w-[18px] h-[18px] bg-blue-100 " />
            Cart 1
          </li>
          <li className="flex gap-2 items-center">
            <span className="rounded-full w-[18px] h-[18px] bg-pink-100 " />
            Cart 1
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
