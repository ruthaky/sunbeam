import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Surge",
    description: "Surge",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased bg-white min-h-screen flex flex-col overflow-x-hidden">
                {children}
            </body>
        </html>
    );
} 