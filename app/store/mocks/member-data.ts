import { faker } from "@faker-js/faker";

interface member {
	created: string;
	expires: Date;
	firstName: string;
	lastName: string;
	phoneNumber: number;
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
		expires: faker.date.future(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		phoneNumber: parseInt(faker.phone.number()),
		birthDate: faker.date.past(),
		membership: 1,
	},
	{
		created: faker.date.past().toString(),
		expires: faker.date.future(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		phoneNumber: parseInt(faker.phone.number()),
		birthDate: faker.date.past(),
		membership: 1,
	},
	{
		created: faker.date.past().toString(),
		expires: faker.date.future(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		phoneNumber: parseInt(faker.phone.number()),
		birthDate: faker.date.past(),
		membership: 1,
	},
	{
		created: faker.date.past().toString(),
		expires: faker.date.future(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		phoneNumber: parseInt(faker.phone.number()),
		birthDate: faker.date.past(),
		membership: 1,
	},
];

const fakeMemberData: Array<newMember> = [
	{ date: "2023-06-01", "New Members": 153 },
	{ date: "2023-07-01", "New Members": 105 },
	{ date: "2023-08-01", "New Members": 78 },
	{ date: "2023-09-01", "New Members": 191 },
	{ date: "2023-10-01", "New Members": 200 },
	{ date: "2023-11-01", "New Members": 232 },
	{ date: "2023-12-01", "New Members": 300 },
];

const fakeReturningMemberData: Array<returningMember> = [
	{ date: "2023-06-01", "Returning Members": 21 },
	{ date: "2023-07-01", "Returning Members": 43 },
	{ date: "2023-08-01", "Returning Members": 63 },
	{ date: "2023-09-01", "Returning Members": 20 },
	{ date: "2023-10-01", "Returning Members": 80 },
	{ date: "2023-11-01", "Returning Members": 10 },
	{ date: "2023-12-01", "Returning Members": 123 },
];

const fakeSubscriptionPlanData: Array<subscriptionPlanData> = [
	{ date: "2023-06-01", "1 Month": 31, "3 Months": 153, "6 Months": 10 },
	{ date: "2023-07-01", "1 Month": 5, "3 Months": 21, "6 Months": 65 },
	{ date: "2023-08-01", "1 Month": 6, "3 Months": 32, "6 Months": 21 },
	{ date: "2023-09-01", "1 Month": 12, "3 Months": 74, "6 Months": 80 },
	{ date: "2023-10-01", "1 Month": 45, "3 Months": 140, "6 Months": 50 },
	{ date: "2023-11-01", "1 Month": 15, "3 Months": 55, "6 Months": 95 },
	{ date: "2023-12-01", "1 Month": 28, "3 Months": 77, "6 Months": 40 },
	{ date: "2024-01-01", "1 Month": 100, "3 Months": 200, "6 Months": 320 },
	{ date: "2024-02-01", "1 Month": 80, "3 Months": 140, "6 Months": 230 },
];

const fakeMonthlySalesData: Array<financialData> = [
	{
		month: "January",
		sales: 1200,
	},
	{
		month: "February",
		sales: 1500,
	},
	{
		month: "March",
		sales: 1800,
	},
	{
		month: "April",
		sales: 1600,
	},
	{
		month: "May",
		sales: 1700,
	},
	{
		month: "June",
		sales: 1400,
	},
	{
		month: "July",
		sales: 2000,
	},
	{
		month: "August",
		sales: 1900,
	},
	{
		month: "September",
		sales: 2100,
	},
	{
		month: "October",
		sales: 2200,
	},
	{
		month: "November",
		sales: 2300,
	},
	{
		month: "December",
		sales: 2400,
	},
];

export {
	fakeMemberData,
	fakeSubscriptionPlanData,
	fakeReturningMemberData,
	fakeMonthlySalesData,
};
