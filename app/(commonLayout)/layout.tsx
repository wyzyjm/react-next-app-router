"use client"
import Link from "next/link"
import React, { useState } from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = useState(0)
	return (
		<div className='border-2 border-dashed border-black w-1/2 mx-auto p-4'>
			<div className='flex gap-4 font-bold text-purple-500 mb-4'>
				<Link href='/app'>app</Link>
				<Link href='/dataset'>dataset</Link>
			</div>
			<div className='flex gap-4  mb-4'>
				<span>{count}</span>
				<button onClick={() => setCount(count + 1)}>+1</button>
			</div>
			{children}
		</div>
	)
}

export default Layout
