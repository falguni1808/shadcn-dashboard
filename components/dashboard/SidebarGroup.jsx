"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SidebarGroup({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
      >
        <span>{label}</span>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {open && <div className="ml-4 space-y-1">{children}</div>}
    </div>
  );
}
