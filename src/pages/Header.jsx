import { FaBookOpen, FaRegMoon, } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
    return (
        <div className=" w-full h-[60px] flex items-center justify-between px-4 py-4 ">
            <div className="w-[220px] h-[40px] flex items-center justify-center gap-4  bg-gray-950 px-2 rounded-lg">
                <span className="text-white/80"><FaBookOpen /></span>
                <h3 className="text-white/80 font-semibold text-[16px] tracking-widest">Search Course</h3>
            </div>
            <div className=" w-full h-full flex items-center justify-end gap-4">
                <span className="text-white/85 text-[18px]"><FaRegMoon /></span>
                <p className="font-medium -tracking-wider text-[16px] text-white/80">some dumb</p>
                <div className="flex items-center justify-center w-[35px] h-[35px] bg-blue-300 text-white  rounded-full">
                    <span ><FaRegCircleUser /></span>
                </div>
            </div>
        </div>
    )
}

export default Header
