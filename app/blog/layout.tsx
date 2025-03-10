import React from "react"

const BlogLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <div className='container mx-auto mt-10'>{children}</div>
}

export default BlogLayout
