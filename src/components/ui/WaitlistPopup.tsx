"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { useWaitlist } from "@/context/WaitlistContext";

// --- SUPABASE INITIALIZATION ---
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Initialize Supabase only if URL and KEY are provided to avoid throwing if not yet configured
const supabase = SUPABASE_URL && SUPABASE_ANON_KEY ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

export const WaitlistPopup = () => {
  const { isWaitlistOpen, closeWaitlist } = useWaitlist();
  
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
  const [handle, setHandle] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Reset states when the modal is reopened
  useEffect(() => {
    if (isWaitlistOpen) {
      setEmail("");
      setPlatform("");
      setHandle("");
      setStatus("idle");
      setErrorMessage("");
    }
  }, [isWaitlistOpen]);

  // Basic regex validation for email
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Front-end Validation
    if (!email || !platform || !handle) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (!supabase) {
      setErrorMessage("Supabase is not configured yet. Please check environment variables.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Supabase Insert
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email, social_platform: platform, social_handle: handle }]);

      if (error) {
        // Postgres unique violation code for duplicate emails
        if (error.code === "23505") { 
          setErrorMessage("This email is already on the waitlist!");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
          console.error("Supabase Error:", error);
        }
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isWaitlistOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeWaitlist}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            className="relative w-full max-w-md bg-zinc-950 border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Close Icon */}
            <button 
              onClick={closeWaitlist}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {status === "success" ? (
                // SUCCESS STATE
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#fcb045]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                    <p className="text-zinc-400">
                      Thanks for joining. We'll be in touch as soon as we're ready for you.
                    </p>
                  </div>
                </motion.div>
              ) : (
                // FORM STATE
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                  <p className="text-zinc-400 text-sm mb-6">
                    Get early access to our DM Sales Automation tools.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#fd1d1d]/50 transition-all font-sans"
                      />
                    </div>

                    {/* Social Platform Select */}
                    <div>
                      <label htmlFor="platform" className="block text-sm font-medium text-zinc-300 mb-1.5">
                        Primary Selling Platform <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="platform"
                          value={platform}
                          onChange={(e) => setPlatform(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fd1d1d]/50 transition-all appearance-none text-white font-sans"
                          style={{ color: platform ? "white" : "#52525b" }} 
                        >
                          <option value="" disabled className="text-zinc-500">Select platform</option>
                          <option value="Instagram" className="text-white">Instagram</option>
                          <option value="WhatsApp" className="text-white">WhatsApp</option>
                          <option value="TikTok" className="text-white">TikTok</option>
                          <option value="Other" className="text-white">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Handle Input */}
                    <div>
                      <label htmlFor="handle" className="block text-sm font-medium text-zinc-300 mb-1.5">
                        Social Page Name/Handle <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="handle"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value)}
                        placeholder="@yourhandle"
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#fd1d1d]/50 transition-all font-sans"
                      />
                    </div>

                    {/* Error Message */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <p>{errorMessage}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full mt-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-medium rounded-xl px-4 py-3.5 hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center disabled:opacity-50 disabled:active:scale-100 shadow-[0_0_15px_rgba(253,29,29,0.2)] font-sans"
                    >
                      {status === "loading" ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
