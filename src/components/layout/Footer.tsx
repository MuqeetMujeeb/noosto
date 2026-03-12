import Link from "next/link";
import { MessageSquare, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#050208] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 group">
            <div className="flex bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-1.5 rounded-lg">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Noosto</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-[200px]">
            Automate your social sales. 24/7 AI-powered Instagram & WhatsApp automation.
          </p>
          <div className="flex gap-4 items-center mt-2">
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Col 2: Product */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold mb-2">Product</h4>
          <Link href="#features" className="text-zinc-500 hover:text-white text-sm transition-colors">Features</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Pricing</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Integrations</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Waitlist</Link>
        </div>

        {/* Col 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">About Us</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Blog</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Careers</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Contact</Link>
        </div>

        {/* Col 4: Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Cookie Policy</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-600">
        <div>© {new Date().getFullYear()} Noosto Inc. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-zinc-400">Language: English</span>
          <span className="cursor-pointer hover:text-zinc-400">Status: Operational</span>
        </div>
      </div>
    </footer>
  );
};
