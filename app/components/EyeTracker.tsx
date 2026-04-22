import { useEffect, useRef } from "react";

export default function EyeTracker() {
  const trackerRef = useRef<HTMLDivElement>(null);
  const pupil1Ref = useRef<HTMLDivElement>(null);
  const pupil2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const appShell = document.getElementById("app-shell");
    const root = document.documentElement;
    const isPressHandledTarget = (target: EventTarget | null) => {
      return target instanceof HTMLElement
        ? Boolean(
            target.closest(
              "a, button, iframe, [role='button'], .panel, .panel-hover-motion, .hero-info-card, .green-panel, .pink-panel",
            ),
          )
        : false;
    };

    const enableInvertMode = () => {
      appShell?.classList.add("mouse-invert-active");
      root.classList.add("mouse-invert-active");
    };

    const disableInvertMode = () => {
      appShell?.classList.remove("mouse-invert-active");
      root.classList.remove("mouse-invert-active");
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;

      const tracker = trackerRef.current;
      if (!tracker) return;

      const maxOffset = 5;
      const rect = tracker.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY) || 1;
      const scale = Math.min(distance, maxOffset) / distance;
      const offsetX = deltaX * scale;
      const offsetY = deltaY * scale;
      const transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;

      if (pupil1Ref.current) pupil1Ref.current.style.transform = transform;
      if (pupil2Ref.current) pupil2Ref.current.style.transform = transform;
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (isPressHandledTarget(e.target)) return;
      enableInvertMode();
    };
    const handlePointerEnd = () => disableInvertMode();

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerEnd);
    document.addEventListener("pointercancel", handlePointerEnd);
    window.addEventListener("blur", disableInvertMode);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerEnd);
      document.removeEventListener("pointercancel", handlePointerEnd);
      window.removeEventListener("blur", disableInvertMode);
      disableInvertMode();
    };
  }, []);

  return (
    <div id="eye-tracker" ref={trackerRef}>
      <div className="eye">
        <div className="pupil" ref={pupil1Ref} />
      </div>
      <div className="eye">
        <div className="pupil" ref={pupil2Ref} />
      </div>
    </div>
  );
}
