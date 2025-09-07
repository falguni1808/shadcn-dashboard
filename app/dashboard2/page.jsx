"use client";

import StatCard from "@/components/dashboard/StatCard";
import BarChartCard from "@/components/dashboard/BarChartCard";
import { MessageSquare, Mail, Bot, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Charts from "@/components/dashboard2/charts";
import { GeneralInteractionsCard } from "@/components/dashboard2/generalInteractionsCard";
import LastCampaigns from "@/components/dashboard2/lastCampaigns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function DashboardPage() {
    const data = [
        { name: "1 Oct", value: 1800 },
        { name: "2 Oct", value: 2200 },
        { name: "3 Oct", value: 3000 },
        { name: "4 Oct", value: 1600 },
        { name: "5 Oct", value: 1700 },
        { name: "6 Oct", value: 1500 },
        { name: "7 Oct", value: 2000 },
        { name: "8 Oct", value: 2600 },
        { name: "9 Oct", value: 2100 },
        { name: "10 Oct", value: 1900 },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total SMS Interactions"
                    value="45,231.89"
                    change="+20.1% from last month"
                    icon={<MessageSquare size={18} />}
                />
                <StatCard
                    title="Total WA Interactions"
                    value="55,231.89"
                    change="+80.1% from last month"
                    icon={<MessageCircle size={18} />}
                />
                <StatCard
                    title="Total RCS Interactions"
                    value="41,231.89"
                    change="+20.1% from last month"
                    icon={<Mail size={18} />}
                />
                <StatCard
                    title="Total Voice Interactions"
                    value="12,234"
                    change="+80.1% from last month"
                    icon={<Bot size={18} />}
                />
                <StatCard
                    title="Total Email Interactions"
                    value="2,234"
                    change="+19% from last month"
                    icon={<MessageSquare size={18} />}
                />
                <StatCard
                    title="Total Bot Interactions"
                    value="41,231.89"
                    change="+20.1% from last month"
                    icon={<MessageCircle size={18} />}
                />
                <StatCard
                    title="Total LiveChat Interactions"
                    value="+762350"
                    change="+80.1% from last month"
                    icon={<Mail size={18} />}
                />
                <StatCard
                    title="Total Ads"
                    value="12,234"
                    change="+19% from last month"
                    icon={<Bot size={18} />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-9">
                    <Charts title="Recent Interactions" data={data} />
                </div>
                <div className="lg:col-span-3">
                    <GeneralInteractionsCard title="General Interactions" data={data} />
                </div>
            </div>
            <LastCampaigns />
        </div>
    );
}