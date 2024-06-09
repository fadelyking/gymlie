import { faker } from "@faker-js/faker";

const today = new Date();
const sixMonthsFromToday = new Date(today);
sixMonthsFromToday.setMonth(today.getMonth() + 6);
const oneYearFromToday = new Date(today);
oneYearFromToday.setFullYear(today.getFullYear() + 1);
const randomDate = faker.date.between(today, oneYearFromToday);

interface members {
    registration_date: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    membership_status: boolean;
    membership_length: string;
}

const members: Array<members> = [
    {
        registration_date: "2023-01-15T10:30:00.000Z",
        first_name: "John",
        last_name: "Smith",
        phone_number: 1234567890,
        membership_status: true,
        membership_length: "2024-07-15T10:30:00.000Z",
    },
    {
        registration_date: "2023-02-20T09:15:00.000Z",
        first_name: "Jane",
        last_name: "Johnson",
        phone_number: 2345678901,
        membership_status: false,
        membership_length: "2024-08-20T09:15:00.000Z",
    },
    {
        registration_date: "2023-03-25T08:45:00.000Z",
        first_name: "Alex",
        last_name: "Williams",
        phone_number: 3456789012,
        membership_status: true,
        membership_length: "2024-09-25T08:45:00.000Z",
    },
    {
        registration_date: "2023-03-25T08:45:00.000Z",
        first_name: "Chris",
        last_name: "Jones",
        phone_number: 4567890123,
        membership_status: true,
        membership_length: "2024-10-10T11:00:00.000Z",
    },
    {
        registration_date: "2023-05-05T12:30:00.000Z",
        first_name: "Katie",
        last_name: "Brown",
        phone_number: 5678901234,
        membership_status: false,
        membership_length: "2024-11-05T12:30:00.000Z",
    },
    {
        registration_date: "2023-06-15T14:00:00.000Z",
        first_name: "Michael",
        last_name: "Davis",
        phone_number: 6789012345,
        membership_status: true,
        membership_length: "2024-12-15T14:00:00.000Z",
    },
    {
        registration_date: "2023-07-20T15:45:00.000Z",
        first_name: "Sarah",
        last_name: "Miller",
        phone_number: 7890123456,
        membership_status: false,
        membership_length: "2025-01-20T15:45:00.000Z",
    },
    {
        registration_date: "2023-08-25T16:30:00.000Z",
        first_name: "David",
        last_name: "Wilson",
        phone_number: 8901234567,
        membership_status: true,
        membership_length: "2025-02-25T16:30:00.000Z",
    },
    {
        registration_date: "2023-09-30T17:00:00.000Z",
        first_name: "Laura",
        last_name: "Moore",
        phone_number: 9012345678,
        membership_status: false,
        membership_length: "2025-03-30T17:00:00.000Z",
    },
    {
        registration_date: "2023-10-10T18:15:00.000Z",
        first_name: "Robert",
        last_name: "Taylor",
        phone_number: 1230984567,
        membership_status: true,
        membership_length: "2025-04-10T18:15:00.000Z",
    },
];
export default members;
