"use client";

import StatCard from "@/components/dashboard/StatCard";
import BarChartCard from "@/components/dashboard/BarChartCard";
import { MessageSquare, Mail, Bot, MessageCircle, Calendar } from "lucide-react";
import { LastCampaignsTable } from "@/components/dashboard/LastCampaignsTable";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const data = [
    { name: "Jan", value: 6000 },
    { name: "Feb", value: 4500 },
    { name: "Mar", value: 2000 },
    { name: "Apr", value: 3500 },
    { name: "May", value: 1500 },
    { name: "Jun", value: 5200 },
    { name: "Jul", value: 4900 },
    { name: "Aug", value: 2300 },
    { name: "Sep", value: 6500 },
    { name: "Oct", value: 5800 },
    { name: "Nov", value: 6100 },
    { name: "Dec", value: 4000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm text-gray-600">
            <Calendar size={18} />
            <span>Jan 20, 2023 - Feb 09, 2023</span>
          </div>
          <Button>Download</Button>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-black text-white rounded-md">
          Overview
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">
          Analytics
        </button>
      </div>

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartCard title="Recent Interactions" data={data} />
        <BarChartCard title="General Interactions" data={data} />
      </div>

      <LastCampaignsTable />

    </div>
  );
}