import { Sidebar } from "@/components/layout/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen md:flex">
      <Sidebar />
      <section className="relative flex-1 overflow-hidden p-4 sm:p-6 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_24rem)]" />
        <div className="relative mx-auto max-w-7xl">{children}</div>
      </section>
    </main>
  );
}
