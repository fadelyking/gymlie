import { faker } from "@faker-js/faker";

interface member {
	created: string;
	expires: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	birthDate: Date;
	membership: number;
}

interface newMember {
	date: string;
	"New Members": number;
}

interface returningMember {
	date: string;
	"Returning Members": number;
}

interface subscriptionPlanData {
	date: string;
	"1 Month": number;
	"3 Months": number;
	"6 Months": number;
}

interface financialData {
	month: string;
	sales: number;
}

const fakeMembers: Array<member> = [
	{
		created: faker.date.past().toString(),
		expires: faker.date.future().toString(),
		firstName: faker.person.firstName().toString(),
		lastName: faker.person.lastName(),
		phoneNumber: `3${parseInt(faker.phone.number("#######"))}`,
		birthDate: faker.date.past(),
		membership: 1,
	},
	{
		created: faker.date.past().toString(),
		expires: faker.date.future().toString(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		phoneNumber: `3${parseInt(faker.phone.number("#######"))}`,
		birthDate: faker.date.past(),
		membership: 1,
	},
	{
		created: faker.date.past().toString(),
		expires: faker.date.future().toString(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		phoneNumber: `3${parseInt(faker.phone.number("#######"))}`,
		birthDate: faker.date.past(),
		membership: 0,
	},
	{
		created: faker.date.past().toString(),
		expires: faker.date.future().toString(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		phoneNumber: `3${parseInt(faker.phone.number("#######"))}`,
		birthDate: faker.date.past(),
		membership: 1,
	},
];

const fakeMemberData: Array<newMember> = [
	{
		date: "2023-06-01",
		"New Members": faker.number.int({ min: 50, max: 300 }),
	},
	{
		date: "2023-07-01",
		"New Members": faker.number.int({ min: 50, max: 300 }),
	},
	{
		date: "2023-08-01",
		"New Members": faker.number.int({ min: 50, max: 300 }),
	},
	{
		date: "2023-09-01",
		"New Members": faker.number.int({ min: 50, max: 300 }),
	},
	{
		date: "2023-10-01",
		"New Members": faker.number.int({ min: 50, max: 300 }),
	},
	{
		date: "2023-11-01",
		"New Members": faker.number.int({ min: 50, max: 300 }),
	},
	{
		date: "2023-12-01",
		"New Members": faker.number.int({ min: 50, max: 300 }),
	},
];

const fakeReturningMemberData: Array<returningMember> = [
	{
		date: "2023-06-01",
		"Returning Members": faker.number.int({ min: 10, max: 123 }),
	},
	{
		date: "2023-07-01",
		"Returning Members": faker.number.int({ min: 10, max: 123 }),
	},
	{
		date: "2023-08-01",
		"Returning Members": faker.number.int({ min: 10, max: 123 }),
	},
	{
		date: "2023-09-01",
		"Returning Members": faker.number.int({ min: 10, max: 123 }),
	},
	{
		date: "2023-10-01",
		"Returning Members": faker.number.int({ min: 10, max: 123 }),
	},
	{
		date: "2023-11-01",
		"Returning Members": faker.number.int({ min: 10, max: 123 }),
	},
	{
		date: "2023-12-01",
		"Returning Members": faker.number.int({ min: 10, max: 123 }),
	},
];

const fakeSubscriptionPlanData: Array<subscriptionPlanData> = [
	{
		date: "2023-06-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2023-07-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2023-08-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2023-09-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2023-10-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2023-11-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2023-12-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2024-01-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
	{
		date: "2024-02-01",
		"1 Month": faker.number.int({ min: 5, max: 100 }),
		"3 Months": faker.number.int({ min: 21, max: 200 }),
		"6 Months": faker.number.int({ min: 10, max: 320 }),
	},
];

const fakeMonthlySalesData: Array<financialData> = [
	{ month: "January", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "February", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "March", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "April", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "May", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "June", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "July", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "August", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "September", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "October", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "November", sales: faker.number.int({ min: 1200, max: 2400 }) },
	{ month: "December", sales: faker.number.int({ min: 1200, max: 2400 }) },
];
export {
	fakeMemberData,
	fakeSubscriptionPlanData,
	fakeReturningMemberData,
	fakeMonthlySalesData,
	fakeMembers,
};
