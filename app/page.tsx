"use client";
import { useState, useEffect } from "react";
import Section from "@/components/my-section";
import { Button, Link, Spinner, Text, useThemeContext } from "@radix-ui/themes";
import { DataList, Badge } from "@radix-ui/themes";
import { useTheme } from "next-themes";

export default function Home() {
    const [mounted, setMounted] = useState<boolean>(false);
    const color = useThemeContext().accentColor;
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Spinner />;
    }

    return (
        <div className="home">
            <Section>
                <div className="flex flex-col justify-between items-center space-y-8">
                    <h1 className="lg:text-7xl text-center max-md:text-3xl text-5xl lg:w-[60%] font-bold my-10">
                        Switch themes & colors made fast using <br />{" "}
                        <Text className="opacity-80" color={color}>Next.js + TypeScript</Text>
                    </h1>
                    <div className="flex items-center space-x-5">
                        <Button
                            size="3"
                            className="!cursor-pointer"
                            variant="solid"
                        >
                            Test Button 1
                        </Button>
                        <Button
                            size="3"
                            className="!cursor-pointer"
                            variant="outline"
                        >
                            Test Button 2
                        </Button>
                    </div>
                    <Link href="#">Sample Link</Link>

                    <DataList.Root>
                        <DataList.Item align="center">
                            <DataList.Label minWidth="88px">
                                Status
                            </DataList.Label>
                            <DataList.Value>
                                <Badge
                                    color="jade"
                                    variant="soft"
                                    radius="full"
                                >
                                    Working
                                </Badge>
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Theme
                            </DataList.Label>
                            <DataList.Value>{theme}</DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Color
                            </DataList.Label>
                            <DataList.Value>{color}</DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Source Code
                            </DataList.Label>
                            <DataList.Value>
                                <Link
                                    target="_blank"
                                    href="https://github.com/nchhillar2004/next-theme"
                                >
                                    GitHub
                                </Link>
                            </DataList.Value>
                        </DataList.Item>
                    </DataList.Root>
                </div>
            </Section>
        </div>
    );
}
