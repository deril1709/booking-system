import React, { useState } from "react";
import Logo from "../assets/badminton.svg";
import {
    ArrowLeftRightIcon,
    UserCog,
    ImagePlus,
    LayoutDashboard,
    HelpCircleIcon,
    LogOut
} from "lucide-react";
import { motion } from "framer-motion";
import RightArrowIcon from "./../assets/icons/rightArrow.svg";
import { Link, useParams } from "react-router-dom";

const variants = {
    expanded: { width: "20%" },
    nonexpanded: { width: "6%" },
};

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(true);
    let { subpage } = useParams();
    function LinkClasses(type = null) {
        let classes = '';
        if (type === subpage) {
            classes += ' rounded bg-blue-400 text-white';
        }
        return classes;
    }
    if (subpage === undefined) {
        subpage = 'dashboard';
    }


    return (
        <motion.div
            animate={isExpanded ? "expanded" : "nonexpanded"}
            variants={variants}
            className={
                "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
                (isExpanded ? " px-10" : " px-6")
            }
        >
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-blue-400 flex justify-center items-center"
            >
                <img src={RightArrowIcon} className="w-2" />
            </div>

            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-blue-400 flex justify-center items-center"
            >
                <img src={RightArrowIcon} className="w-2" />
            </div>

            <div className="logo-div flex space-x-4 items-center">
                <img src={Logo} className="w-8 h-w-8" />
                <span className={!isExpanded ? "hidden" : "block"}>Damai</span>
            </div>
            <div className="flex flex-col space-y-8 mt-12">
                <Link className={LinkClasses('dashboard')} to={'/admin'}>
                    <div className="nav-links w-full">
                        <div className="flex gap-3 w-full p-2">
                            <LayoutDashboard />
                            <span className={!isExpanded ? "hidden" : "block"}>Dashboard</span>
                        </div>
                    </div>
                </Link>
                <Link className={LinkClasses('formlapangan')} to={'/admin/formlapangan'}>
                    <div className="nav-links w-full" >
                        <div className="flex space-x-3 w-full p-2" >
                            <ImagePlus />
                            <span className={!isExpanded ? "hidden" : "block"}>Lapangan</span>
                        </div>
                    </div>
                </Link>

                <Link className={LinkClasses('user')} to={'/admin/user'}>
                    <div className="nav-links w-full">
                        <div className="flex space-x-3 w-full p-2 rounded ">
                            <UserCog />
                            <span className={!isExpanded ? "hidden" : "block"}>User</span>
                        </div>
                    </div>
                </Link>

                <Link className={LinkClasses('booking')} to={'/admin/booking'}>
                    <div className="nav-links w-full">
                        <div className="flex space-x-3 w-full p-2 rounded">
                            <ArrowLeftRightIcon />
                            <span className={!isExpanded ? "hidden" : "block"}>
                                Booking List
                            </span>
                        </div>
                    </div>
                </Link>

                <Link className={LinkClasses('help')} to={'/admin/help'}>
                    <div className="nav-links w-full">
                        <div className="flex space-x-3 w-full p-2 rounded  ">
                            <HelpCircleIcon />
                            <span className={!isExpanded ? "hidden" : "block"}>
                                Help Center
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to={'/login'}>
                    <div className="nav-links w-full">
                        <div className="flex space-x-3 w-full p-2 rounded  ">
                            <LogOut />
                            <span className={!isExpanded ? "hidden" : "block"}>
                                LogOut
                            </span>
                        </div>
                    </div>
                </Link>

            </div>
        </motion.div>
    );
}

export default Navbar;
