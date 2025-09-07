"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";

const data = [
  { date: "1 Oct", value: 1800 },
  { date: "2 Oct", value: 3000 },
  { date: "3 Oct", value: 1700 },
  { date: "4 Oct", value: 1500 },
  { date: "5 Oct", value: 1600 },
  { date: "6 Oct", value: 1650 },
  { date: "7 Oct", value: 1900 },
  { date: "8 Oct", value: 2200 },
  { date: "9 Oct", value: 2000 },
  { date: "10 Oct", value: 1800 },
];

export default function RecentInteractions() {
  return (
    <Card className="w-full max-w-6xl rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-8 pt-6">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Recent Interactions
          </h2>
          <p className="text-sm text-gray-400">Up-to-Date Sales</p>
        </div>
        <Select defaultValue="Oct 2025">
          <SelectTrigger className="w-[140px] h-9 text-sm">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Oct 2025">October 2025</SelectItem>
            <SelectItem value="Sep 2025">September 2025</SelectItem>
            <SelectItem value="Aug 2025">August 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <CardContent className="flex gap-8 items-center px-8 pb-6">
        <div className="flex-1 h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
              <YAxis domain={[-3000, 3000]} stroke="#9ca3af" fontSize={12} />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar
                dataKey="value"
                fill="url(#reflectionGradient)"
                radius={[0, 0, 4, 4]}
                shape={(props) => {
                  const { x, y, width, height, fill } = props; 
                  return (
                    <rect
                      x={x}
                      y={y + height}
                      width={width}
                      height={height}
                      fill={fill}
                      rx={4} 
                      ry={4}
                    />
                  );
                }}
              />
              <defs>
                <linearGradient id="reflectionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-60 flex flex-col divide-y divide-gray-200">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-blue-100 text-blue-500">⬇️</span>
              <div>
                <p className="text-sm text-gray-400">This month Delivery</p>
                <h3 className="text-xl font-bold text-gray-900">48,820</h3>
              </div>
            </div>
            <span className="text-green-500 text-sm font-medium">45.5% ↑</span>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-gray-100 text-blue-400">↗️</span>
              <div>
                <p className="text-sm text-gray-400">Spams this month</p>
                <h3 className="text-xl font-bold text-gray-900">6,498</h3>
              </div>
            </div>
            <span className="text-red-500 text-sm font-medium">5.5% ↓</span>
          </div>
        </div>
      </CardContent>
    </Card>

  );
}
