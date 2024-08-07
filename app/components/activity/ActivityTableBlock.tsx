"use client";
import { RiFlag2Line } from "@remixicon/react";
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from "@tremor/react";

const data = [
    {
        name: "Viola Amherd",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
        status: "active",
    },
    {
        name: "Albert Rösti",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
        status: "active",
    },
    {
        name: "Beat Jans",
        Role: "Federal Councillor",
        departement: "The Federal Department of Justice and Police (FDJP)",
        status: "active",
    },
    {
        name: "Ignazio Cassis",
        Role: "Federal Councillor",
        departement: "The Federal Department of Foreign Affairs (FDFA)",
        status: "active",
    },
    {
        name: "Karin Keller-Sutter",
        Role: "Federal Councillor",
        departement: "The Federal Department of Finance (FDF)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
];

export default function ActivityTableBlock() {
    return (
        <Card className="col-start-3 col-span-full row-span-full">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                Activity
            </h3>
            <Table className="mt-5 ">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody className="h-full">
                    {data.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.Role}</TableCell>
                            <TableCell>{item.departement}</TableCell>
                            <TableCell>
                                <Badge color="emerald" icon={RiFlag2Line}>
                                    {item.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}
