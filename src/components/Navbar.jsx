import React, {useState} from 'react'
import {styles} from "../style.js";
import {logo, menu, close} from "../assets/index.js";
import {Link} from "react-router-dom";
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#FAFBFD]/80 backdrop-blur-xl border-b border-slate-200/60`}
        >
            <div className={"w-full flex justify-between items-center max-w-7xl mx-auto"}>
                <Link
                    to={"/"}
                    className={"flex items-center gap-2"}
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt={"logo"} className={"w-9 h-9 object-contain"}/>
                    <p className={"text-[#1E293B] text-[18px] font-bold cursor-pointer flex"}>Namar Abbas &nbsp;
                        <span className={"sm:block hidden text-[#0F766E] font-medium"}> | Technical Project Manager</span>
                    </p>
                </Link>
                <ul className={"list-none hidden sm:flex flex-row gap-10"}>
                    {navLinks.map((singleNavLink) => (
                        <li
                            key={singleNavLink.id}
                            className={`
                            ${active === singleNavLink.title ? 'text-[#0F766E]' : 'text-[#64748B]'}
                            hover:text-[#0F766E] text-[18px] cursor-pointer transition-colors duration-300`}
                            onClick={() => setActive(singleNavLink.title)}
                        >
                            <a href={`#${singleNavLink.id}`}>{singleNavLink.title}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className={"sm:hidden flex flex-1 justify-end items-center"}>
                    <img
                        src={toggle ? close : menu}
                        alt={"menu"}
                        className={"w-[28px] h-[28px] object-contain cursor-pointer"}
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`
                    ${!toggle ? 'hidden' : 'flex'}
                     p-6 glass absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}>
                        <ul className={"list-none flex justify-end items-start flex-col gap-4"}>
                            {navLinks.map((singleNavLink) => (
                                <li
                                    key={singleNavLink.id}
                                    className={`
                            ${active === singleNavLink.title ? 'text-[#0F766E]' : 'text-[#64748B]'}
                            font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setActive(singleNavLink.title)
                                        setToggle(!toggle)
                                    }}
                                >
                                    <a href={`#${singleNavLink.id}`}>{singleNavLink.title}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
