import Image from "next/image"
import Link from "next/link"
import logo from '@/images/logo.svg'

export default function Navigation() {
  return (
    <div className="py-3 px-8 flex justify-between items-center">
        <Link href="/">
            <Image src={logo} width={180} alt="logo" />
        </Link>
        <div>
            <Link href="startups" className="hover:text-primary text-gray-30 underl font-bold">Are you a startup?</Link>
        </div>
    </div>
  )
}
