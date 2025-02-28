import React from "react"
// 修改网站字体
import { Coiny } from "next/font/google"

const aBeeZee = Coiny({
	weight: "400",
	subsets: ["latin-ext"]
})
const Template = ({ children }: { children: React.ReactNode }) => {
	return <div className={`w-1/2 mx-auto ${aBeeZee.className}`}>{children}</div>
}

export default Template
