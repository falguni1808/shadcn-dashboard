"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({ title, value, change, icon }) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>
        <p className="text-2xl font-bold mt-2">{value}</p>
        <p className="text-xs text-green-600">{change}</p>
      </CardContent>
    </Card>
  );
}
