"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { Lock, Eye, EyeOff, ChevronDown } from "lucide-react";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="grid h-220 grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="flex flex-col justify-between bg-blue-900 p-12 text-white">
                <div className="flex-1 flex flex-col justify-center items-start max-w-xl mx-auto">
                    <h1 className="text-6xl font-bold leading-tight mb-4 mt-18">
                        We invest in the world’s potential
                    </h1>
                    <p className="text-base text-gray-200 mb-6">
                        Here at flowbite we focus on markets where technology, innovation,
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-white hover:underline"
                    >
                        Read more about our app
                        <span className="ml-2">➝</span>
                    </a>
                    <div className="mt-10 flex justify-center">
                        <Image
                            src="/woman-laptop-standing.png"
                            alt="Registration Illustration"
                            width={600}
                            height={600}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-center p-8">
                <div className="absolute top-4 left-6 flex items-center gap-2">
                    <Image
                        src="/1SPOC-Logo-Icon.png"
                        alt="1SPOC-Logo"
                        width={20}
                        height={20}
                    />
                    <span className="text-lg font-bold">1SPOC</span>
                </div>
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
                        <CardTitle className="text-xl font-semibold">Sign in</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="example@mail.com" required />
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="password">
                                        Password <span className="text-red-500">*</span>
                                    </Label>
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
                        <Button type="submit" className="w-full bg-blue-700">
                            Sign In
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Page
