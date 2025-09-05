import { useEffect, useRef, useState, PropsWithChildren } from "react";

type Props = {
  /** ritardo in secondi */
  delay?: number;
  /** offset verticale iniziale in px */
  y?: number;
  /** se false, l'animazione si ripete quando esci/rientri in viewport */
  once?: boolean;
};

export default function AnimateIn({
  children,
  delay = 0,
  y = 20,
  once = true,
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
    transition: `opacity .6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform .6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
