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

const members: Array<member> = [
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

const fakeData: Array<newMember> = [
    { date: "2023-06-01", "New Members": 153 },
    { date: "2023-07-01", "New Members": 105 },
    { date: "2023-08-01", "New Members": 78 },
    { date: "2023-09-01", "New Members": 191 },
    { date: "2023-10-01", "New Members": 200 },
    { date: "2023-11-01", "New Members": 232 },
    { date: "2023-12-01", "New Members": 300 },
];

export default fakeData;
