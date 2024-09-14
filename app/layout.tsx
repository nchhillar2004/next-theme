import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import Theme from "@/components/color-provider";
import "./globals.css";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
    title: "Next Themes",
    description: "Fastest theme switch Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Theme>
                        <div className="resume-builder">{children}</div>
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    );
}
