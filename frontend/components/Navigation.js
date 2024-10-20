// ./frontend/app/components/Navigation.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '@/images/logo.svg';
import { RiLoginBoxLine } from "react-icons/ri";

export default function Navigation() {
  const pathname = usePathname(); 
  
  return (
    <div className="p-3 flex justify-between items-center">
      <Link href="/">
        <Image className="w-44 md:w-52" src={logo} width={200} alt="logo" />
      </Link>

      <div className="flex items-center gap-3">
        {pathname === "/startups" ? (
          <Link href="/" className="hover:text-primary md:p-4 md:border md:border-primary text-gray-300 font-bold">
            Are you an investor?
          </Link>
        ) : (
          <Link href="/startups" className="hover:text-primary text-gray-300 font-bold md:p-4 md:border md:border-primary">
            Are you a startup?
          </Link>
        )}
        <Link href="/dashboard" className="text-gray-300 text-sm font-bold hover:text-primary flex gap-1 items-center">
          <RiLoginBoxLine /> Login
        </Link>
      </div>
    </div>
  );
}