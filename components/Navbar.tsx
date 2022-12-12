import { useRouter } from "next/router";
import requests from "../utils/request";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="pb-5 px-5 mx-20 flex text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div> */}
    </nav>
  );
};

export default Navbar;
