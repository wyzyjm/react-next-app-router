import "./styles/globals.css"
import Nav from "@/app/components/nav"
import type { Metadata } from "next"
import { AntdRegistry } from "@ant-design/nextjs-registry" // antd 用来解决css延迟问题
import { navData } from "@/config"

export const metadata: Metadata = {
    title: "Next App",
    description: "Next App layout",
}

interface IProps {
    children: React.ReactNode
    model: React.ReactNode
}
export default function RootLayout({ children, model }: IProps) {
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
    )
}
