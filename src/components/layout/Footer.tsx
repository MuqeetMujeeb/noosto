import Link from "next/link";
import { FaInstagram, FaXTwitter, FaDiscord } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#050208] border-t border-white/5 pt-20 pb-10 px-6">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 pb-16">

        {/* Left: Brand */}
        <div className="flex flex-col">
          <span className="font-bold text-xl tracking-tight text-white">
            Noosto
          </span>

          <div className="flex gap-3 items-center mt-3">
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </Link>

            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <FaXTwitter className="w-5 h-5" />
            </Link>

            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <FaDiscord className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

          {/* Product */}
          <div className="flex flex-col gap-2">
            <h4 className="text-zinc-300 font-semibold mb-1">Product</h4>
            <Link href="#features" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Features
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Integrations
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <h4 className="text-zinc-300 font-semibold mb-1">Resources</h4>
            <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Help Center
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h4 className="text-zinc-300 font-semibold mb-1">Legal</h4>
            <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-600">
        <div>© {new Date().getFullYear()} Noosto Inc. All rights reserved.</div>

        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-zinc-400">
            Language: English
          </span>
        </div>
      </div>

    </footer>
  );
};