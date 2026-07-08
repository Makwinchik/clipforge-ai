"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cloud, FileVideo, Lock, UploadCloud, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function UploadPage() {
  return (
    <div className="space-y-8">
      <motion.header initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
        <Badge><Cloud className="h-3.5 w-3.5 text-cyan-200" /> Upload studio</Badge>
        <h1 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Bring in your source video.</h1>
        <p className="max-w-2xl text-slate-400">A premium upload experience prepared for large video files. This page remains a UI-only foundation with no processing logic.</p>
      </motion.header>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.08 }}>
          <Card className="relative flex min-h-[30rem] flex-col items-center justify-center overflow-hidden border-dashed text-center">
            <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 blur-3xl" />
            <div className="relative grid h-24 w-24 place-items-center rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-glow">
              <UploadCloud className="h-10 w-10 text-violet-100" />
            </div>
            <h2 className="relative mt-7 text-3xl font-black tracking-[-0.05em]">Drop your video here</h2>
            <p className="relative mt-3 max-w-lg text-slate-400">MP4, MOV, and WEBM placeholders. Real file transport and processing are intentionally deferred.</p>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row"><Button type="button" size="lg">Select file</Button><Button type="button" size="lg" variant="secondary">Paste cloud link</Button></div>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-500"><span className="flex items-center gap-2"><Lock className="h-3.5 w-3.5" /> Private workspace</span><span className="flex items-center gap-2"><FileVideo className="h-3.5 w-3.5" /> Up to 500MB configured</span></div>
          </Card>
        </motion.div>

        <div className="grid gap-5">
          <Card>
            <div className="flex items-center justify-between"><h2 className="text-lg font-bold">Upload readiness</h2><Badge>Stub API</Badge></div>
            <div className="mt-6 space-y-5">
              {[['Storage reservation', 100], ['Metadata capture', 64], ['Processing engine', 0]].map(([label, value]) => <div key={label as string}><div className="mb-2 flex justify-between text-sm"><span className="text-slate-300">{label}</span><span className="text-slate-500">{value}%</span></div><Progress value={value as number} /></div>)}
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-200"><CheckCircle2 className="h-5 w-5" /></div><div><h2 className="font-bold">What happens next?</h2><p className="mt-2 text-sm leading-6 text-slate-400">Future iterations can connect this interface to signed uploads, job queues, scene detection, captions, and export presets.</p></div></div>
          </Card>
          <Card className="bg-gradient-to-br from-white/[0.075] to-violet-500/10">
            <Video className="h-6 w-6 text-cyan-200" />
            <h2 className="mt-5 text-xl font-black tracking-[-0.04em]">No AI included yet</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">This is intentionally a world-class UI foundation only.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
