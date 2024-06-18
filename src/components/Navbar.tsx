"use client";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="stiky top-0 left-0 right-0 p-3 flex justify-between items-center bg-black z-50 shadow-2xl ">
      <Image
        className="cursor-pointer"
        src={"/logo.png"}
        alt="logo"
        width={50}
        height={50}
      />

      <div>
        <ul className="flex gap-6 pr-8 ">
          <li>
            <a className="text-purple-100  text-1xl" href="/">
              Home
            </a>
          </li>

          <li>
            <a className="text-purple-100  text-1xl" href="/aboutus">
              AboutUs
            </a>
          </li>
          <li>
            <a className="text-purple-100  text-1xl" href="/theater">
              Theater
            </a>
          </li>
          <li>
            <a className="text-purple-100  text-1xl" href="/product">
              Product
            </a>
          </li>
          <li>
            <a className="text-purple-100  text-1xl" href="/teams">
              Teams
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
