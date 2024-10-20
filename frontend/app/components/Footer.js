import Link from 'next/link';
import { FaInstagram, FaLinkedin,  FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-auto bottom-0 left-0 w-full h-20 flex flex-col justify-center z-50 pt-2.5">
      <hr className="w-full border-gray-600 border-t mb-2.5 shadow" />
      <div className="flex justify-between items-center px-5">
        <p className="m-0 text-sm font-light">
          © 2024 Blockboard. All Rights Reserved
        </p>
        <div className="flex gap-5">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-foreground text-2xl transition-colors hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-foreground text-2xl transition-colors hover:text-primary" />
          </Link>
          <Link href="https://discord.com" target="_blank" aria-label="Discord">
            <FaDiscord className="text-foreground text-2xl transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}