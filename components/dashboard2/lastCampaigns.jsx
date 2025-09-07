"use client";

import { Calendar, MoreHorizontal, Pencil, MessageSquare, Mail, Smartphone, Info, Edit } from "lucide-react"


function getChannelIcon(channel) {
    switch (channel) {
        case "WhatsApp":
            return <MessageSquare className="h-5 w-5" />
        case "RCS":
            return <MessageSquare className="h-5 w-5" />
        case "SMS":
            return <Smartphone className="h-5 w-5" />
        case "Email":
            return <Mail className="h-5 w-5" />
        default:
            return null
    }
}
const campaigns = [
    {
        name: "Campaign Name WhatsApp",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "WhatsApp",
        status: "Completed",
    },
    {
        name: "Campaign Name WhatsApp",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "WhatsApp",
        status: "In progress",
    },
    {
        name: "Campaign Name WhatsApp",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "WhatsApp",
        status: "Failed",
    },
    {
        name: "Campaign Name RCS",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "RCS",
        status: "Completed",
    },
    {
        name: "Campaign Name RCS",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "RCS",
        status: "Completed",
    },
    {
        name: "Campaign Name RCS",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "RCS",
        status: "Failed",
    },
    {
        name: "Campaign Name SMS",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "SMS",
        status: "Completed",
    },
    {
        name: "Campaign Name SMS",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "SMS",
        status: "Completed",
    },
    {
        name: "Campaign Name SMS",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "SMS",
        status: "Completed",
    },
    {
        name: "Campaign Name Email",
        date: "15 Mar 2025 - 15 Mar 2025",
        channel: "Email",
        status: "Completed",
    },
];

const statusColors = {
    Completed: "text-green-600 bg-green-100",
    "In progress": "text-orange-600 bg-orange-100",
    Failed: "text-red-600 bg-red-100",
};


export default function LastCampaigns() {

    return (
        <div className="bg-white rounded-2xl shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-lg font-semibold">Last 10 Campaigns</h2>
                    <p className="text-sm text-gray-500">You made 14 campaigns this month.</p>
                </div>
                <button className="border px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Filter
                </button>
            </div>

            <table className="w-full text-sm text-left">
                <thead className="text-gray-500 border-b">
                    <tr>
                        <th className="py-2">Campaigns Name</th>
                        <th className="py-2">Start Date - End Date</th>
                        <th className="py-2">Channel</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((c, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                            <td className="py-3">{c.name}</td>
                            <td className="py-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                {c.date}
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    {getChannelIcon(c.channel)}
                                    <span>{c.channel}</span>
                                </div>
                            </td>
                            <td className="py-3">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${statusColors[c.status]}`}
                                >
                                    ● {c.status}
                                </span>
                            </td>
                            <td className="py-3 flex gap-2">
                                <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
                                    <Edit className="w-4 h-4 text-gray-600" />
                                </button>
                                <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700">
                                    <MoreHorizontal className="w-4 h-4 text-white" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>Showing 1-10 of 100</span>
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <button
                            key={n}
                            className={`px-3 py-1 rounded-lg ${n === 1 ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
