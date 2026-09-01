import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // in ms
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

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
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
      // tighter margin so mobile elements reveal as user scrolls naturally
      { threshold: 0.05, rootMargin: "40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenCls =
    direction === "left"
      ? "opacity-0 -translate-x-5"
      : direction === "right"
        ? "opacity-0 translate-x-5"
        : direction === "down"
          ? "opacity-0 -translate-y-5"
          : "opacity-0 translate-y-6";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={cn(
        "transition-all ease-out transform-gpu will-change-transform",
        revealed ? "opacity-100 translate-x-0 translate-y-0" : hiddenCls,
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

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
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
