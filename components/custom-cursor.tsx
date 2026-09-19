"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const mouse = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let frame = 0;

    const render = () => {
      // Ease the ring toward the pointer so it trails behind the dot.
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;

      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      root.dataset.cursorVisible = "true";

      const target = event.target as Element | null;
      root.dataset.cursorHover = target?.closest(INTERACTIVE) ? "true" : "false";
    };

    const onLeave = () => {
      root.dataset.cursorVisible = "false";
    };
    const onDown = () => {
      root.dataset.cursorDown = "true";
    };
    const onUp = () => {
      root.dataset.cursorDown = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    root.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      root.removeEventListener("mouseleave", onLeave);
      root.classList.remove("has-custom-cursor");
      delete root.dataset.cursorVisible;
      delete root.dataset.cursorHover;
      delete root.dataset.cursorDown;
    };
  }, []);

  return (
    <div aria-hidden className="custom-cursor pointer-events-none fixed inset-0 z-[100]">
      <div ref={ringRef} className="cursor-ring">
        <span />
      </div>
      <div ref={dotRef} className="cursor-dot">
        <span />
      </div>
    </div>
  );
}
