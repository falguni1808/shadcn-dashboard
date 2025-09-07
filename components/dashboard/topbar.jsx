"use client";
import { Input } from "@/components/ui/input";

export default function Topbar() {
  return (
    <>
      <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search..."
            className="w-60"
          />
          <img
            src="/Avatar.png"
            alt="user avatar"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </header>
    </>
  );
}
