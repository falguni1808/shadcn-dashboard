"use client";

import Link from "next/link";

export default function SidebarItem({ icon: Icon, label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </Link>
  );
}
