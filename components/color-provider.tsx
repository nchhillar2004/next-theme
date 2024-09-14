"use client";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { ReactNode, useEffect, useState } from "react";
import { useThemeContext } from "@radix-ui/themes";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { Select } from "@radix-ui/themes";

export enum ColorProps {
    Teal = "teal",
    Ruby = "ruby",
    Blue = "blue",
    Mint = "mint",
    Green = "green",
    Purple = "purple",
    Orange = "orange",
}

export default function Theme({ children }: { children: ReactNode }) {
    const [color, setColor] = useState<ColorProps>(ColorProps.Teal);
    const [radius, setRadius] = useState<"small" | "none" | "medium" | "large">(
        "medium"
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedColor = localStorage.getItem("color") as ColorProps;
            const storedRadius = localStorage.getItem("radius");

            if (storedColor) setColor(storedColor);
            if (storedRadius)
                setRadius(
                    storedRadius as "small" | "none" | "medium" | "large"
                );
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("color", color);
            localStorage.setItem("radius", radius);
        }
    }, [color, radius]);

    return (
        <RadixTheme
            accentColor={color}
            radius={radius}
        >
            <SiteHeader setColor={setColor} setRadius={setRadius} />
            <main>{children}</main>
            <SiteFooter />
        </RadixTheme>
    );
}

export function ColorToggle({
    setColor,
    setRadius,
}: {
    setColor: (color: ColorProps) => void;
    setRadius: (radius: "small" | "none" | "medium" | "large") => void;
}) {
    const { accentColor, radius } = useThemeContext();

    return (
        <div className="flex items-center flex-wrap space-x-5">
            <Select.Root value={accentColor} onValueChange={setColor}>
                <Select.Trigger className="!capitalize" />
                <Select.Content position="popper">
                    <Select.Group>
                        <Select.Label>Color</Select.Label>
                        {Object.values(ColorProps).map((color) => (
                            <Select.Item
                                className="!capitalize"
                                key={color}
                                value={color}
                            >
                                {color}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <Select.Root value={radius} onValueChange={setRadius}>
                <Select.Trigger />
                <Select.Content position="popper">
                    <Select.Group>
                        <Select.Label>Radius</Select.Label>
                        <Select.Item value="none">None</Select.Item>
                        <Select.Item value="small">Small</Select.Item>
                        <Select.Item value="medium">Medium</Select.Item>
                        <Select.Item value="large">Large</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </div>
    );
}
