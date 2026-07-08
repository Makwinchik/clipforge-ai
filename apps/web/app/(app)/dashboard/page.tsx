"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, Clock3, Film, PlayCircle, Sparkles, TrendingUp, UploadCloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const stats = [
  { label: "Videos uploaded", value: "0", icon: Film, hint: "Ready for first import" },
  { label: "Clips generated", value: "0", icon: Sparkles, hint: "AI processing not enabled" },
  { label: "Exports queued", value: "0", icon: TrendingUp, hint: "Connect export pipeline later" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <motion.header initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Badge><Activity className="h-3.5 w-3.5 text-emerald-300" /> Workspace online</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-6xl">Command center</h1>
          <p className="mt-3 max-w-2xl text-slate-400">A premium overview for uploads, processing status, and project momentum. Data is intentionally placeholder-only.</p>
        </div>
        <Button href="/upload" size="lg" showArrow>Upload video</Button>
      </motion.header>

      <section className="grid gap-4 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
            <Card className="group relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white/[0.075]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-violet-400/10 blur-2xl transition group-hover:bg-violet-400/20" />
              <div className="relative flex items-start justify-between"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/8 text-violet-200"><stat.icon className="h-5 w-5" /></div><ArrowUpRight className="h-4 w-4 text-slate-500" /></div>
              <p className="relative mt-8 text-sm text-slate-400">{stat.label}</p>
              <p className="relative mt-2 text-5xl font-black tracking-[-0.05em]">{stat.value}</p>
              <p className="relative mt-3 text-xs text-slate-500">{stat.hint}</p>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-white/10 p-6"><div><h2 className="text-xl font-bold tracking-[-0.03em]">Project pipeline</h2><p className="mt-1 text-sm text-slate-400">Empty state designed for future real-time jobs.</p></div><Badge><Clock3 className="h-3.5 w-3.5" /> Idle</Badge></div>
          <div className="grid gap-4 p-6 md:grid-cols-3">
            {['Upload', 'Analyze', 'Export'].map((stage, index) => <div key={stage} className="rounded-3xl border border-white/10 bg-black/20 p-5"><div className="mb-6 flex items-center justify-between"><span className="text-sm font-semibold">{stage}</span><span className="text-xs text-slate-500">0{index + 1}</span></div><Progress value={index === 0 ? 8 : 0} /><p className="mt-4 text-xs leading-5 text-slate-500">Waiting for your first source video.</p></div>)}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200"><PlayCircle className="h-5 w-5" /></div><div><h2 className="font-bold">Recent activity</h2><p className="text-xs text-slate-500">No events yet</p></div></div>
          <div className="mt-6 space-y-3"><Skeleton className="h-14" /><Skeleton className="h-14" /><Skeleton className="h-14" /></div>
        </Card>
      </section>

      <Card className="flex flex-col items-start justify-between gap-6 bg-gradient-to-br from-violet-500/15 via-white/[0.055] to-cyan-400/10 md:flex-row md:items-center">
        <div><h2 className="text-2xl font-black tracking-[-0.04em]">Ready to create your first project?</h2><p className="mt-2 text-slate-400">The workspace is prepared. Upload UI connects to the stub API when backend integration is wired.</p></div>
        <Button href="/upload" variant="secondary"><UploadCloud className="h-4 w-4" /> Go to upload</Button>
      </Card>
    </div>
  );
}
