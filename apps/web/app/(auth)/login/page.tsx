"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Fingerprint, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-10">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="relative w-full max-w-md">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft className="h-4 w-4" /> Back home</Link>
        <Card className="overflow-hidden p-8">
          <div className="mb-8 flex items-center justify-between"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950 shadow-glow"><Sparkles className="h-5 w-5" /></div><Badge><Fingerprint className="h-3.5 w-3.5" /> Secure</Badge></div>
          <h1 className="text-4xl font-black tracking-[-0.06em]">Welcome back</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">Sign in placeholder for the premium ClipForge AI workspace.</p>
          <form className="mt-8 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-slate-300">Email<input className="h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-300/60 focus:ring-4 focus:ring-violet-400/10" placeholder="you@company.com" type="email" /></label>
            <label className="grid gap-2 text-sm font-medium text-slate-300">Password<input className="h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-300/60 focus:ring-4 focus:ring-violet-400/10" placeholder="••••••••" type="password" /></label>
            <Button type="button" size="lg" className="mt-2" showArrow>Continue</Button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-500">Authentication is not implemented in this foundation.</p>
        </Card>
      </motion.div>
    </main>
  );
}
