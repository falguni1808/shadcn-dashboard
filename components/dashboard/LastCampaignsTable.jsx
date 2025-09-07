"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const campaigns = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        channel: "WhatsApp",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        avatar: "Avatar.png",
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        channel: "SMS",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        avatar: "Avatar.png",
    },
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        channel: "WhatsApp",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",

        avatar: "Avatar.png",
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        channel: "SMS",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789", avatar: "Avatar.png",
    },
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        channel: "WhatsApp",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189", avatar: "Avatar.png",
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        channel: "SMS",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789", avatar: "Avatar.png",
    }, {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        channel: "WhatsApp",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        avatar: "Avatar.png",
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        channel: "SMS",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        avatar: "Avatar.png",
    }, {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        channel: "WhatsApp",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        campaign: "2,55,23,189",
        avatar: "Avatar.png",
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        channel: "SMS",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        campaign: "1,12,45,789",
        avatar: "Avatar.png",
    },
]
export function LastCampaignsTable() {


    return (
        <div className="mt-6">
            <h1 className="text-lg font-semibold mb-2">Last 10 Campaigns</h1>
            <h1 className="text-lg mb-4">You made 14 campaigns this month</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Channel</TableHead>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Campaign</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {campaigns.map((c, i) => (
                        <TableRow key={i}>
                            <TableCell className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={c.avatar} />
                                    <AvatarFallback>{c.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{c.name}</p>
                                    <p className="text-sm text-muted-foreground">{c.email}</p>
                                </div>
                            </TableCell>
                            <TableCell>{c.channel}</TableCell>
                            <TableCell>{c.campaign}</TableCell>
                            <TableCell>{c.campaign}</TableCell>
                            <TableCell>{c.campaign}</TableCell>
                            <TableCell>{c.campaign}</TableCell>
                            <TableCell>{c.campaign}</TableCell>
                            <TableCell>{c.campaign}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
