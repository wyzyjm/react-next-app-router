"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

export interface NavProps {
	navData: Array<{
		path: string
		name: string
	}>
}
const Index = ({ navData }: NavProps) => {
	const pathname = usePathname()
	return (
		<div className='flex justify-center gap-4 font-bold  mb-4 py-4 border-b-2 border-solid border-black'>
			<Link href={"/"}>Home</Link>
			{navData.map(v => {
				return (
					<Link
						className={`${pathname.startsWith(v.name.toLowerCase(), 1) ? "text-purple-500" : ""}`}
						key={v.path}
						href={v.path}
					>
						{v.name}
					</Link>
				)
			})}
		</div>
	)
}

export default Index
