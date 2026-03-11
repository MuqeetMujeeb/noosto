import Link from "next/link";
import { MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 group">
          <div className="flex bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-1.5 rounded-lg">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Noosto</span>
        </div>
        
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
        </div>
        
        <div className="text-sm text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Noosto Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
