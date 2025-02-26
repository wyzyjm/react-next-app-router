import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<h1>Home页面</h1>
			<Link href={"/about"}>about页面</Link>
			<Link href={"/dataset"}>dataset页面</Link>
		</div>
	)
}
