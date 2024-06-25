"use client";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdAnalytics } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { TbSwitch2 } from "react-icons/tb";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

export default function SidebarItems() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-5 content-between justify-between">
            <div>
                <ul className="flex flex-col gap-4">
                    <li
                        className={clsx(
                            "flex hover:bg-slate-300/75 cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75",
                            {
                                "bg-slate-300/75 px-2.5 py-3 pr-16 rounded-md":
                                    pathname === "/dashboard",
                            }
                        )}
                    >
                        <div className="flex gap-5 items-center flex-grow">
                            <TbLayoutDashboardFilled size={20} />
                            <Link href="/dashboard" className=" pt-1">
                                Dashboard
                            </Link>
                        </div>
                    </li>
                    <li className="flex hover:bg-slate-300/75 cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75">
                        <div className="flex gap-5 items-center flex-grow">
                            <MdAnalytics size={20} />
                            <Link href="/dashboard/activity" className=" pt-1">
                                Activity
                            </Link>
                        </div>
                    </li>
                    <li className="flex hover:bg-slate-300/75 cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75">
                        <div className="flex gap-5 items-center flex-grow">
                            <FaUsers size={20} />
                            <span className=" pt-1">Members</span>
                        </div>
                    </li>
                    <li className="flex  hover:bg-slate-300/75 cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75">
                        <div className="flex gap-5 items-center flex-grow">
                            <BsCalendar2DateFill size={20} />
                            <span className=" pt-1">Schedules</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col gap-4">
                    <li className="flex hover:bg-slate-300/75 cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75'">
                        <div className="flex gap-5 items-center flex-grow">
                            <IoMdSettings size={20} />
                            <span className=" pt-1">Settings</span>
                        </div>
                    </li>
                    <li className="flex md:text-sm lg:text-lg hover:bg-slate-300/75 cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75">
                        <div className="flex gap-5 items-center flex-grow">
                            <TbSwitch2 size={20} />
                            <span className=" pt-1">Switch Gym</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
