"use client"
import React from "react"
import { useParams, usePathname } from "next/navigation"

const Id = () => {
	const params = useParams()
	const pathName = usePathname()
	console.log("params", params, pathName)
	return (
		<div>
			<h1>about 动态路由页面</h1>
		</div>
	)
}

export default Id
