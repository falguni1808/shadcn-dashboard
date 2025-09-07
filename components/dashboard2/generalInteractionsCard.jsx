"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts"
const data = [
    { name: "Previous Month", value: 75, fill: "#3b82f6" }, 
    { name: "Current Month", value: 90, fill: "#06b6d4" }, 
]

export function GeneralInteractionsCard() {
    return (
        <Card className="rounded-2xl shadow-md h-[100%] ">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg">General Interactions</CardTitle>
                <p className="text-sm text-muted-foreground">Channel Breakdown</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center  -mt-[3rem]">
                <div className="relative w-70 h-67 flex items-center justify-center mt--2">
                    <ResponsiveContainer >
                        <RadialBarChart
                            cx="50%"
                            cy="50%"
                            innerRadius="50%"
                            outerRadius="70%"
                            barSize={8}
                            data={data}
                            startAngle={90}
                            endAngle={-270}
                        >
                            <RadialBar background cornerRadius={30} dataKey="value" />
                        </RadialBarChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold">$36,358</h3>
                        <p className="text-green-500 text-sm">+9% then last month ↑</p>
                    </div>
                </div>

            
                <div className="flex justify-center text-[12px] space-x-2 -mt-[2rem] ml-3">
                    <div className="flex flex-col items-center ">
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                            <span className="text-gray-600">Previous Month</span>
                        </div>
                        <span className="font-semibold text-gray-900">Aug</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1">
                            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                            <span className="text-gray-600">Current Month</span>
                        </div>
                        <span className="font-semibold text-gray-900">Sep</span>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

