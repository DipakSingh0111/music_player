import { IoHomeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-black fixed bottom-0 md:top-0 text-white flex justify-around md:justify-center items-center gap-[50px] p-[20px]">
      <Link to="/">
        <IoHomeSharp className="w-[25px] h-[25px]" />
      </Link>
      <Link to="/search">
        <FaSearch className="w-[25px] h-[25px]" />
      </Link>
      <Link to="/playlist">
        <RiPlayListFill className="w-[25px] h-[25px]" />
      </Link>
      <Link to="/like">
        <FaHeart className="w-[25px] h-[25px]" />
      </Link>
    </div>
  );
};

export default Navbar;
