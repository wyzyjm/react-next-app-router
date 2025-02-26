import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <div className='h-[100vh] bg-blue-300'>{children}</div>
}

export default Layout
