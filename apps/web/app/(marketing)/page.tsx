"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clapperboard, Command, Layers3, Play, Sparkles, WandSparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const features = [
  { icon: WandSparkles, title: "AI-ready workflow", copy: "Prepared for future clip scoring, captions, and format automation." },
  { icon: Layers3, title: "Studio-grade workspace", copy: "A calm command center for uploads, drafts, exports, and teams." },
  { icon: Zap, title: "Built for speed", copy: "Next.js foundations with crisp interactions and responsive layouts." },
];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <div className="flex items-center gap-3 text-lg font-black tracking-[-0.03em]"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-950 shadow-glow"><Sparkles className="h-5 w-5" /></span>ClipForge AI</div>
        <div className="flex items-center gap-2"><Button href="/login" variant="ghost">Login</Button><Button href="/dashboard" showArrow>Open app</Button></div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge><span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" /> Premium SaaS foundation</Badge>
          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.08em] text-white sm:text-6xl lg:text-8xl">
            Forge magnetic clips from long-form video.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            A polished, AI-ready video workspace inspired by the best modern tools. Upload, organize, and prepare content for the processing engine coming next.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="/upload" size="lg" showArrow>Start uploading</Button><Button href="/dashboard" size="lg" variant="secondary">View dashboard</Button></div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-400">
            {['Dark mode native', 'API-first', 'Responsive'].map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{item}</div>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-500/25 via-fuchsia-500/10 to-cyan-400/20 blur-2xl" />
          <Card className="relative overflow-hidden p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div><p className="text-sm font-semibold">Launch cutdown</p><p className="text-xs text-slate-400">00:14 selected from 42:09</p></div>
              <Badge className="border-emerald-300/20 bg-emerald-300/10 text-emerald-200"><Play className="h-3 w-3" /> Preview</Badge>
            </div>
            <div className="mt-5 aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_22%),linear-gradient(135deg,rgba(124,58,237,0.65),rgba(6,182,212,0.22))] p-4">
              <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2"><Command className="h-4 w-4" /><span className="text-xs text-slate-200">ClipForge Studio</span></div>
                <div><p className="max-w-sm text-2xl font-black tracking-[-0.04em]">3 hooks detected for short-form launch assets</p><Progress value={72} className="mt-5" /></div>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {features.map((feature) => <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><feature.icon className="mb-4 h-5 w-5 text-violet-200" /><p className="font-semibold">{feature.title}</p><p className="mt-2 text-xs leading-5 text-slate-400">{feature.copy}</p></div>)}
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-4 px-5 pb-16 lg:grid-cols-3 lg:px-8">
        {['Upload source video', 'Prepare clip queue', 'Export everywhere'].map((step, index) => <Card key={step} className="group transition duration-300 hover:-translate-y-1 hover:bg-white/[0.075]"><div className="mb-8 flex items-center justify-between"><span className="text-sm text-slate-400">0{index + 1}</span><ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-white" /></div><Clapperboard className="mb-5 h-6 w-6 text-cyan-200" /><h3 className="text-xl font-bold tracking-[-0.03em]">{step}</h3><p className="mt-3 text-sm leading-6 text-slate-400">A premium placeholder flow ready for real AI and video processing modules.</p></Card>)}
      </section>
    </main>
  );
}
