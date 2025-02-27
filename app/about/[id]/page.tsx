"use client"
import React from "react"
import { useParams, usePathname } from "next/navigation"

const Id = () => {
	const params = useParams()
	const pathName = usePathname()
	return (
		<div>
			<h2>
				{pathName}-{JSON.stringify(params)}
			</h2>
		</div>
	)
}

export default Id
