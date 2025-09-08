"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { Lock, Eye, EyeOff, Mail } from "lucide-react";
import { ChevronDown } from "lucide-react";

export function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="grid h-220 grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center justify-between bg-blue-700 p-8 text-white">
                <div className="w-full flex items-center justify-start">
                    <Image src="/1SpocLogo.png" alt="Login Illustration" width={586} height={30} className="object-contain" />
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <Image src="/loginPageImg.png" alt="Login Illustration" width={400} height={400} className="object-contain" />
                </div>

                <p className="text-xs text-center">Copyright © 2025 Pinnacle Teleservices Pvt. Ltd.</p>
            </div>

            <div className="relative flex items-center justify-center p-8">
                <div className="absolute top-4 right-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                <span>🇺🇸 English</span>
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                            <DropdownMenuItem>🇮🇳 Hindi</DropdownMenuItem>
                            <DropdownMenuItem>🇫🇷 French</DropdownMenuItem>
                            <DropdownMenuItem>🇩🇪 German</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <Card className="w-full max-w-sm shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Sign In</CardTitle>
                        <CardDescription>Please enter valid details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="example@mail.com" required />
                                </div>

                                <div className="mb-4">
                                    <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="********"
                                            className="pl-10 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-2.5 text-gray-500"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">Remember for 15 days</Label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-600 hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
