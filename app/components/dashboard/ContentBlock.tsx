import { LineChart } from "@tremor/react";
import fakedata from "@/app/store/mocks/member-data";
import Image from "next/image";

export default function ContentBlock() {
	return (
		<>
			<div className="row-start-1 col-start-3 col-span-9 text-lg">
				<span className=" text-lg font-bold ">
					Welcome back, Rickson
				</span>
				<br></br>
				<span>Here is your gym overview for today</span>
			</div>
			<div className="flex justify-between rounded-2xl drop-shadow-md  p-5 col-span-8 row-span-4 row-start-2 col-start-3 overflow-hidden bg-[#6D39E6] text-white">
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
						className=" h-52 p-5"
						data={fakedata}
						index="date"
						showAnimation={true}
						startEndOnly={true}
						categories={["New Members"]}
						colors={["indigo", "rose"]}
						yAxisWidth={30}
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
