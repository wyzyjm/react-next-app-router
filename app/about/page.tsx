"use client"
import Link from "next/link"
import React from "react"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"

const About = () => {
	const router = useRouter() // 用来导航的
	console.log("router", router)
	const about_detail = [
		{
			id: 1
		},
		{
			id: 2
		},
		{
			id: 3
		}
	]
	return (
		<div>
			<h1>About页面</h1>

			<ul>
				{about_detail.map(v => {
					return (
						<li key={v.id}>
							<Link href={`/about/${v.id}`}>{v.id}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default About
