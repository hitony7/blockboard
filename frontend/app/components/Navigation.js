// ./frontend/app/components/Navigation.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '@/images/logo.svg';

export default function Navigation() {
  const pathname = usePathname(); 
  
  return (
    <div className="py-3 px-8 flex justify-between items-center">
      <Link href="/">
        <Image className="w-44 md:w-52" src={logo} width={200} alt="logo" />
      </Link>

      <div>
        {pathname === "/startups" ? (
          <Link href="/" className="hover:text-primary md:p-4 md:border md:border-primary text-gray-300 font-bold text-xs md:text-md">
            Are you an investor?
          </Link>
        ) : (
          <Link href="/startups" className="hover:text-primary text-gray-300 font-bold md:p-4 md:border md:border-primary text-xs md:text-md">
            Are you a startup?
          </Link>
        )}
      </div>
    </div>
  );
}