"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard2/header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
