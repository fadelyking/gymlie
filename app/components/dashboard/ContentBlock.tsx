import { LineChart } from "@tremor/react";
import members from "@/app/store/mocks/member-data";
const transformedData = members.map((member) => ({
    registration_date: new Date(member.registration_date)
        .toISOString()
        .split("T")[0], // Format date to YYYY-MM-DD
    membership_status: member.membership_status ? 1 : 0, // Convert boolean to 1 or 0
}));
export default function ContentBlock() {
    return (
        <>
            <div className="row-start-1 col-start-3 col-span-3 text-lg">
                <span className=" text-lg font-bold ">
                    Welcome back, Rickson
                </span>
                <br></br>
                <span>Here is your gym overview for today</span>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-8 row-span-4 row-start-2 col-start-3">
                <div>Ready to setup your club loyalty card?</div>
                <div>
                    Increase your retention rates and members happiness through
                    our new happiness
                </div>
                <button>Setup</button>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-8 row-span-7 row-start-2 col-start-11">
                <div>Ready to setup your club loyalty card?</div>
                <div>
                    Increase your retention rates and members happiness through
                    our new happiness
                </div>
                <button>Setup</button>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white col-span-2 row-span-3 row-start-6 col-start-3">
                <div>
                    <LineChart
                        className=" h-44 p-5"
                        data={transformedData}
                        index="registeration_date"
                        showAnimation={true}
                        startEndOnly={true}
                        categories={["membership_status"]}
                        colors={["indigo", "rose"]}
                        yAxisWidth={40}
                    />
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-2 row-span-3 row-start-6 col-start-5">
                <div>Ready to setup your club loyalty card?</div>
                <div>
                    Increase your retention rates and members happiness through
                    our new happiness
                </div>
                <button>Setup</button>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-2 row-span-3 row-start-6 col-start-7">
                <div>Ready to setup your club loyalty card?</div>
                <div>
                    Increase your retention rates and members happiness through
                    our new happiness
                </div>
                <button>Setup</button>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-2 row-span-3 row-start-6 col-start-9">
                <div>Ready to setup your club loyalty card?</div>
                <div>
                    Increase your retention rates and members happiness through
                    our new happiness
                </div>
                <button>Setup</button>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-8 row-span-4 row-start-9 col-start-3">
                <div>Ready to setup your club loyalty card?</div>
                <div>
                    Increase your retention rates and members happiness through
                    our new happiness
                </div>
                <button>Setup</button>
            </div>
            <div className="rounded-2xl drop-shadow-md bg-white p-5 col-span-8 row-span-4 row-start-9 col-start-11">
                <div>Ready to setup your club loyalty card?</div>
                <div>
                    Increase your retention rates and members happiness through
                    our new happiness
                </div>
                <button>Setup</button>
            </div>
        </>
    );
}
