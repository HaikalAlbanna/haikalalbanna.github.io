import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Start as `true` so SSR and initial client render match (no hydration mismatch).
  // After mount, reset to false so the intersection animation can play.
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Before mount: render fully visible (matches SSR output — no hydration mismatch)
  // After mount: animate from hidden → visible via IntersectionObserver
  const isVisible = !mounted || visible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: mounted
          ? `opacity 700ms cubic-bezier(.22,1,.36,1) ${delay}ms, transform 700ms cubic-bezier(.22,1,.36,1) ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}