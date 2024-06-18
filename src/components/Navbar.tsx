"use client";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-8 py-4 flex justify-between items-center  backdrop-blur-sm z-50 ">
      <a className="text-white font-bold text-4xl" href="/">
        MDN48
      </a>

      <div>
        <ul className="flex gap-6 pr-8 ">
          <li>
            <a className="text-white  text-1xl" href="/">
              Home
            </a>
          </li>

          <li>
            <a className="text-white  text-1xl" href="/aboutus">
              AboutUs
            </a>
          </li>
          <li>
            <a className="text-white  text-1xl" href="/theater">
              Theater
            </a>
          </li>
          <li>
            <a className="text-white  text-1xl" href="/product">
              Product
            </a>
          </li>
          <li>
            <a className="text-white  text-1xl" href="/teams">
              Teams
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
