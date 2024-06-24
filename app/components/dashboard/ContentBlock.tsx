"use client";
import {
    LineChart,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    DonutChart,
    Badge,
} from "@tremor/react";
import {
    fakeMemberData,
    fakeSubscriptionPlanData,
    fakeReturningMemberData,
    fakeMonthlySalesData,
    fakeMembers,
} from "@/app/store/mocks/member-data";
import dateFormatter from "@/app/utils/date-formatter";
import valueFormatter from "@/app/utils/value-formatter";
import Image from "next/image";

export default function ContentBlock() {
    return (
        <>
            <div className="col-start-3 place-items-center text-center sm:row-start-1 sm:col-start-1 col-span-9 text-lg xl:col-start-3">
                <span className=" text-lg font-bold ">Welcome back, Rawan</span>
                <br></br>
                <span>Here is your gym overview for today</span>
            </div>
            <div className="flex justify-between rounded-2xl drop-shadow-md  p-5 col-span-full sm:col-span-8 row-span-4 row-start-2 col-start-1 overflow-hidden bg-[#6D39E6] text-white xl:col-start-3">
                <div className="flex flex-col justify-between ">
                    <div className=" text-2xl">
                        Ready to setup your club loyalty card?
                    </div>
                    <div className=" text-lg">
                        Increase your retention rates and members happiness
                        through our new happiness programme.
                    </div>

                    <button className=" max-w-20  bg-white p-3 text-[#6D39E6] font-bold rounded-md">
                        Setup
                    </button>
                </div>
                <div className="grid w-1/2 grid-cols-5">
                    <Image
                        className="col-start-2 col-span-4"
                        src="/shield.webp"
                        width={330}
                        height={330}
                        alt="Shield"
                    />
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white flex flex-col items-center p-5 col-span-full col-start-1 row-start-6 row-span-5 sm:row-span-7 sm:row-start-2 sm:col-start-9 xl:col-start-11">
                <div className="text-2xl 2xl:pl-10 font-bold text-gray-700">
                    Monthly Revenue
                </div>
                <DonutChart
                    data={fakeMonthlySalesData}
                    className="min-h-96 text-2xl "
                    category="sales"
                    showAnimation={true}
                    index="month"
                    colors={[
                        "blue-500",
                        "cyan-500",
                        "indigo-500",
                        "violet-500",
                        "fuchsia-500",
                        "green-500",
                        "yellow-500",
                        "orange-500",
                        "red-500",
                        "purple-500",
                        "teal-500",
                        "pink-500",
                    ]}
                    valueFormatter={valueFormatter}
                />
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white col-span-full row-start-9 sm:col-span-4 sm:row-span-3 sm:row-start-6 col-start-1 xl:col-start-3 xl:col-span-2">
                <div>
                    <LineChart
                        className=" h-56 p-2"
                        data={fakeMemberData}
                        index="date"
                        showAnimation={true}
                        startEndOnly={true}
                        categories={["New Members"]}
                        colors={["indigo", "rose"]}
                        yAxisWidth={35}
                    />
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white col-span-4 row-span-3 row-start-6 col-start-5 xl:col-start-5 xl:col-span-2">
                <div>
                    <LineChart
                        className=" h-56 p-3"
                        data={fakeSubscriptionPlanData}
                        index="date"
                        showAnimation={true}
                        startEndOnly={true}
                        categories={["1 Month", "3 Months", "6 Months"]}
                        colors={["red", "green", "blue"]}
                        yAxisWidth={35}
                    />
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white col-span-4 row-span-3 row-start-9 col-start-1 xl:col-start-7 xl:row-start-6 xl:col-span-2">
                <div>
                    <LineChart
                        className=" h-56 p-3"
                        data={fakeReturningMemberData}
                        index="date"
                        showAnimation={true}
                        startEndOnly={true}
                        categories={["Returning Members"]}
                        colors={["green"]}
                        yAxisWidth={35}
                    />
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white col-span-4 row-span-3 row-start-9 col-start-5 xl:col-start-9 xl:row-start-6 xl:col-span-2">
                <div>
                    <LineChart
                        className=" h-56 p-3"
                        data={fakeMemberData}
                        index="date"
                        showAnimation={true}
                        startEndOnly={true}
                        categories={["New Members"]}
                        colors={["purple"]}
                        yAxisWidth={35}
                    />
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-full row-span-4 row-start-12 xl:row-start-9 xl:col-start-3 col-start-1 xl:col-span-8">
                <div className="ml-3 text-gray-600 text-lg">
                    Latest Subscriptions
                </div>
                <div className="mx-auto">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell className="text-right">
                                    Start Date
                                </TableHeaderCell>
                                <TableHeaderCell>Phone Number</TableHeaderCell>
                                <TableHeaderCell>Membership</TableHeaderCell>
                                <TableHeaderCell>Status</TableHeaderCell>
                                <TableHeaderCell>Expires</TableHeaderCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    {fakeMembers[fakeMembers.length - 1]
                                        .firstName +
                                        " " +
                                        fakeMembers[fakeMembers.length - 1]
                                            .lastName}
                                </TableCell>
                                <TableCell className="text-right">
                                    {dateFormatter(
                                        fakeMembers[fakeMembers.length - 1]
                                            .created
                                    )}
                                </TableCell>
                                <TableCell>
                                    {
                                        fakeMembers[fakeMembers.length - 1]
                                            .phoneNumber
                                    }
                                </TableCell>
                                <TableCell>
                                    {
                                        fakeMembers[fakeMembers.length - 1]
                                            .membership
                                    }
                                </TableCell>
                                <TableCell>
                                    {fakeMembers[fakeMembers.length - 1]
                                        .membership ? (
                                        <Badge color={"green"}>ACTIVE</Badge>
                                    ) : (
                                        <Badge color={"red"}>INACTUVE</Badge>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {dateFormatter(
                                        fakeMembers[fakeMembers.length - 1]
                                            .expires
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    {fakeMembers[fakeMembers.length - 2]
                                        .firstName +
                                        " " +
                                        fakeMembers[fakeMembers.length - 2]
                                            .lastName}
                                </TableCell>
                                <TableCell className="text-right">
                                    {dateFormatter(
                                        fakeMembers[fakeMembers.length - 2]
                                            .created
                                    )}
                                </TableCell>
                                <TableCell>
                                    {
                                        fakeMembers[fakeMembers.length - 2]
                                            .phoneNumber
                                    }
                                </TableCell>
                                <TableCell>
                                    {
                                        fakeMembers[fakeMembers.length - 2]
                                            .membership
                                    }
                                </TableCell>
                                <TableCell>
                                    {fakeMembers[fakeMembers.length - 2]
                                        .membership ? (
                                        <Badge color={"green"}>ACTIVE</Badge>
                                    ) : (
                                        <Badge color={"red"}>INACTIVE</Badge>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {dateFormatter(
                                        fakeMembers[fakeMembers.length - 2]
                                            .expires
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    {fakeMembers[fakeMembers.length - 3]
                                        .firstName +
                                        " " +
                                        fakeMembers[fakeMembers.length - 3]
                                            .lastName}
                                </TableCell>
                                <TableCell className="text-right">
                                    {dateFormatter(
                                        fakeMembers[fakeMembers.length - 3]
                                            .created
                                    )}
                                </TableCell>
                                <TableCell>
                                    {
                                        fakeMembers[fakeMembers.length - 3]
                                            .phoneNumber
                                    }
                                </TableCell>
                                <TableCell>
                                    {
                                        fakeMembers[fakeMembers.length - 3]
                                            .membership
                                    }
                                </TableCell>
                                <TableCell>
                                    {fakeMembers[fakeMembers.length - 3]
                                        .membership ? (
                                        <Badge color={"green"}>ACTIVE</Badge>
                                    ) : (
                                        <Badge color={"red"}>INACTIVE</Badge>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {dateFormatter(
                                        fakeMembers[fakeMembers.length - 3]
                                            .expires
                                    )}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-full row-span-3 row-start-9 col-start-9 xl:col-start-11 xl:row-span-4">
                <div className="grid grid-cols-3 justify-center pl-3">
                    <div className="col-span-3">Latest Activity</div>
                    <div className="flex flex-col gap-8 pt-5 col-start-1 ">
                        <Badge
                            size="sm"
                            color={"gray"}
                            className=" text-black bg-opacity-100 bg-slate-100"
                        >
                            9:30
                        </Badge>

                        <Badge
                            size="sm"
                            color={"gray"}
                            className=" text-black bg-opacity-100 bg-slate-100"
                        >
                            8:38
                        </Badge>
                        <Badge
                            size="sm"
                            color={"gray"}
                            className=" text-black bg-opacity-100 bg-slate-100"
                        >
                            8:38
                        </Badge>
                        <Badge
                            size="sm"
                            color={"gray"}
                            className=" text-black bg-opacity-100 bg-slate-100 hidden xl:block"
                        >
                            8:22
                        </Badge>
                        <div className="self-center left-14 absolute bg-slate-900 w-[2px] h-32 xl:h-48 -z-10 opacity-10 overflow-hidden " />
                    </div>
                    <div className="flex flex-col gap-6 pt-4 pl-3 col-start-2 col-span-full text-xs">
                        <div className="flex flex-col">
                            Fadhel Alsaegh{" "}
                            <span className=" text-slate-500">
                                Professional
                            </span>
                        </div>
                        <div className="flex flex-col">
                            Ali Ahmed{" "}
                            <span className=" text-slate-500">Beginner</span>
                        </div>
                        <div className="flex flex-col">
                            Mohammed Ali{" "}
                            <span className=" text-slate-500">
                                Intermediate
                            </span>
                        </div>
                        <div className="hidden xl:flex flex-col ">
                            Rawan Yousif{" "}
                            <span className=" text-slate-500">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
