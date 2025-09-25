import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => (typeof document !== "undefined" ? document.getElementById(id) : null))
      .filter(Boolean) as HTMLElement[];

    if (typeof window === "undefined" || !("IntersectionObserver" in window) || elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: [0.15, 0.4, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}
