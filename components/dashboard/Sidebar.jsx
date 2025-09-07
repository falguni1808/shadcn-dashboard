"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BarChart,
  MessageSquare,
  MessageCircle,
  Phone,
  Voicemail,
  Settings,
  Users,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";

export default function Sidebar() {
  return (
    <aside className="w-45 bg-white border-r shadow-sm h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold">1SPOC</h1>
        <p className="text-xs text-gray-500">V2.0.0</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" href="/dashboard" />

        <SidebarGroup label="Campaigns">
          <SidebarItem icon={MessageSquare} label="SMS" href="/dashboard/campaigns/sms" />
          <SidebarItem icon={MessageCircle} label="WhatsApp" href="/dashboard/campaigns/whatsapp" />
          <SidebarItem icon={Voicemail} label="RCS" href="/dashboard/campaigns/rcs" />
          <SidebarItem icon={Phone} label="Voice" href="/dashboard/campaigns/voice" />
        </SidebarGroup>

        <SidebarItem icon={Users} label="Journeys" href="/dashboard/journeys" />
        <SidebarItem icon={BarChart} label="Analytics" href="/dashboard/analytics" />
        <SidebarItem icon={Settings} label="Tools" href="/dashboard/tools" />

        <div className="pt-4">
          <p className="text-xs text-gray-400 uppercase mb-2">Single Sign-On</p>
          <SidebarItem label="Ads Manager" href="#" />
          <SidebarItem label="Chatbot" href="#" />
          <SidebarItem label="Email" href="#" />
        </div>
      </nav>
    </aside>
  );
}
