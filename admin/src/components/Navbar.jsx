import { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken,setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () =>{
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')

  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white border-gray-200">
      <div className="flex items-center gap-2 text-xs">
        <img className=" h-auto max-w-[30%]"  src={assets.newlogo} alt="" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">{aToken ? "Admin" : "Doctor"}</p>
      </div>
      <button onClick={logout} className="bg-blue-500 text-sm px-10 py-2 rounded-full border-blue-500">Logout</button>
    </div>
  );
};

export default Navbar;
