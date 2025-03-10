import React from "react"
import { blog_data } from "@/mock/blog"
import { Button } from "antd"

const Page = () => {
	const list = blog_data.blogList.list
	return (
		<div>
			blog
			<Button type='primary'>按钮</Button>
		</div>
	)
}

export default Page
