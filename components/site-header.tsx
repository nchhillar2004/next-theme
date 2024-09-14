import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { ColorToggle } from "./color-provider";
import { ColorProps } from "./color-provider";

export default function SiteHeader({
    setColor,
    setRadius,
}: {
    setColor: (color: ColorProps) => void;
    setRadius: (radius: "small" | "none" | "medium" | "large") => void;
}) {
    return (
        <header className="py-4 bg-[var(--header)]">
            <div className="container flex items-center space-x-5 justify-between">
                <Link
                    href="/"
                    className="select-none font-extrabold lg:text-2xl text-xl"
                >
                    Themes
                </Link>
                <div className="flex items-center space-x-5">
                    <ThemeToggle />
                    <ColorToggle setColor={setColor} setRadius={setRadius} />
                </div>
            </div>
        </header>
    );
}
