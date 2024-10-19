import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-20 bg-black text-white flex flex-col justify-center z-50 pt-2.5">
      <hr className="w-full border-white border-t mb-2.5" />
      <div className="flex justify-between items-center px-5">
        <p className="m-0 text-sm font-light">
          © 2024 Blockboard. All Rights Reserved
        </p>
        <div className="flex gap-5">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-white text-2xl transition-colors hover:text-blue-500" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-white text-2xl transition-colors hover:text-blue-500" />
          </Link>
          {/* <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter className="text-white text-2xl transition-colors hover:text-blue-500" />
          </Link> */}
          <Link href="https://discord.com" target="_blank" aria-label="Discord">
            <FaDiscord className="text-white text-2xl transition-colors hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
}