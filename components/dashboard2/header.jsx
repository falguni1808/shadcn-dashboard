"use client";

import { Input } from "@/components/ui/input";
import { Bell, Moon } from "lucide-react";

export default function Header() {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
            <h2 className="text-lg font-semibold">Dashboard</h2>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search"
                        className="w-60 pl-10"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                        />
                    </svg>
                </div>
                <button className="p-2 rounded hover:bg-gray-100">
                    <Moon className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded hover:bg-gray-100 relative">
                    <Bell className="h-5 w-5 text-gray-600" />
                </button>
                <img
                    src="/pinLogo.png"
                    alt="user avatar"
                    className="w-8 h-8 rounded-full border"
                />
            </div>
        </header>
    );
}
