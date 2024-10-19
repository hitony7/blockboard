import Image from "next/image"
import Link from "next/link"
import logo from '@/images/logo.svg'

export default function Navigation() {
  return (
    <div className="p-3 flex justify-between items-center">
        <Link href="/">
            <Image src={logo} width={180} alt="logo" />
        </Link>
        <div>
            <Link href="startups" className="hover:text-primary">Are you a startup?</Link>
        </div>
    </div>
  )
}
