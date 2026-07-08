import * as React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline";
type ButtonSize = "default" | "sm" | "lg";

const variants: Record<ButtonVariant, string> = {
  default: "bg-white text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.18)] hover:bg-slate-200",
  secondary: "bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15",
  ghost: "text-slate-300 hover:bg-white/8 hover:text-white",
  outline: "border border-white/12 bg-black/20 text-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  default: "h-11 px-5 py-2",
  sm: "h-9 px-3 text-xs",
  lg: "h-[3.25rem] px-7 py-3 text-base",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  showArrow?: boolean;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  href,
  isLoading,
  showArrow,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-[-0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      <span className="relative z-10">{children}</span>
      {showArrow ? <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}
    </>
  );

  if (href) {
    return <Link className={classes} href={href}>{content}</Link>;
  }

  return <button className={classes} disabled={isLoading || props.disabled} {...props}>{content}</button>;
}
