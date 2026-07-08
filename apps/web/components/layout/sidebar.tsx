"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bell, ChevronUp, Film, LayoutDashboard, Settings, Upload, WandSparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/upload", label: "Upload", icon: Upload },
  { href: "/dashboard", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard", label: "Library", icon: Film },
  { href: "/dashboard", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 z-40 flex h-auto w-full flex-col border-b border-white/10 bg-slate-950/70 p-4 backdrop-blur-2xl md:h-screen md:w-[19rem] md:border-b-0 md:border-r md:p-5">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="relative flex items-center justify-between md:block">
        <Link href="/" className="flex items-center gap-3 text-lg font-black tracking-[-0.03em]">
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-white via-violet-200 to-cyan-200 text-slate-950 shadow-glow">
            <WandSparkles className="h-5 w-5" />
          </span>
          <span>ClipForge AI</span>
        </Link>
        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 md:hidden" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </button>
      </div>

      <nav className="relative mt-6 grid grid-cols-2 gap-2 md:grid-cols-1">
        {navItems.map((item) => {
          const active = pathname === item.href && (item.label === "Overview" || pathname === "/upload");
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-400 transition duration-300 hover:bg-white/[0.07] hover:text-white",
                active && "bg-white/[0.09] text-white shadow-lg shadow-black/20 ring-1 ring-white/10",
              )}
            >
              <span className={cn("grid h-8 w-8 place-items-center rounded-xl bg-white/[0.06] text-slate-400 transition group-hover:text-white", active && "bg-primary/20 text-violet-200")}> <item.icon className="h-4 w-4" /> </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="relative mt-6 hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-4 shadow-panel md:block">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold">Workspace</span>
          <ChevronUp className="h-4 w-4 text-slate-400" />
        </div>
        <Progress value={36} />
        <p className="mt-3 text-xs leading-5 text-slate-400">36% of monthly render credits reserved for upcoming processing features.</p>
      </div>

      <div className="relative mt-auto hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-4 md:block">
        <p className="text-sm font-semibold">Pro workspace</p>
        <p className="mt-2 text-xs leading-5 text-slate-400">Premium interface foundation ready for auth, billing, and processing modules.</p>
      </div>
    </aside>
  );
}
