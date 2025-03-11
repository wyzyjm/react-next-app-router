import "./styles/globals.css";
import Nav, { NavProps } from "@/app/components/nav";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
// export async function generateMetadata(props) {
// 	return {
// 		title: "Create Next "
// 	}
// }

export default function RootLayout({
    children,
    model,
}: Readonly<{
    children: React.ReactNode;
    model: React.ReactNode;
}>) {
    const navData: NavProps["navData"] = [
        {
            path: "/about",
            name: "About",
        },
        {
            path: "/app",
            name: "App",
        },
        {
            path: "/blog",
            name: "Blog",
        },
        {
            path: "/photos",
            name: "Photos",
        },
    ];
    return (
        <html lang="en">
            <body className="mx-auto flex flex-col h-screen">
                <Nav navData={navData} />
                <AntdRegistry>
                    {children}
                    {model}
                </AntdRegistry>
            </body>
        </html>
    );
}
