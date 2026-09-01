import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenCls =
    direction === "left"
      ? "opacity-0 -translate-x-8 blur-[8px]"
      : direction === "right"
        ? "opacity-0 translate-x-8 blur-[8px]"
        : direction === "down"
          ? "opacity-0 -translate-y-6 blur-[8px]"
          : direction === "none"
            ? "opacity-0 blur-[8px]"
            : "opacity-0 translate-y-10 blur-[8px]";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: revealed ? `${delay}ms` : "0ms",
        transitionDuration: `${duration}ms`,
      }}
      className={cn(
        "transform-gpu will-change-[opacity,transform,filter] transition-[opacity,transform,filter] ease-[cubic-bezier(0.16,1,0.3,1)]",
        revealed ? "opacity-100 translate-x-0 translate-y-0 blur-0" : hiddenCls,
        className,
      )}
    >
      {children}
    </div>
  );
}

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1200,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started, end]);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [started, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {started ? count : end}
      {suffix}
    </span>
  );
}
