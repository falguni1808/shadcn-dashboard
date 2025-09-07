"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BarChartCard({ title, data }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm ">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar dataKey="value" fill="#111827" radius={[2, 2, 0, 0]} />
          </BarChart>

        </ResponsiveContainer>

        <div className="flex gap-8 justify-center text-xs ">
          <span className="flex items-center gap-1 text-gray-600">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span> SMS
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span> WhatsApp
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <span className="w-2 h-2 bg-[#1C398E] rounded-full"></span> RCS
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span> Voice
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span> Email
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span> Ads
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <span className="w-2 h-2 bg-pink-600 rounded-full"></span> Bot
          </span>
        </div>
      </div>
    </div>
  );
}
