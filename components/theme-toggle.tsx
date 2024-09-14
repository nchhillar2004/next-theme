"use client";
import { Select, Skeleton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Skeleton>Loading</Skeleton>;
    }

    return (
        <Select.Root value={theme} onValueChange={setTheme}>
            <Select.Trigger />
            <Select.Content position="popper">
                <Select.Group>
                    <Select.Label>Theme</Select.Label>
                    <Select.Item value="system">System</Select.Item>
                    <Select.Item value="light">Light</Select.Item>
                    <Select.Item value="dark">Dark</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select.Root>
    );
}
