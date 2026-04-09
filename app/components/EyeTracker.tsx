import { useEffect, useRef } from "react";

export default function EyeTracker() {
  const trackerRef = useRef<HTMLDivElement>(null);
  const pupil1Ref = useRef<HTMLDivElement>(null);
  const pupil2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const appShell = document.getElementById("app-shell");
    const root = document.documentElement;

    const enableInvertMode = () => {
      appShell?.classList.add("mouse-invert-active");
      root.classList.add("mouse-invert-active");
    };

    const disableInvertMode = () => {
      appShell?.classList.remove("mouse-invert-active");
      root.classList.remove("mouse-invert-active");
    };

    const handleMouseMove = (e: MouseEvent) => {
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

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, iframe, [role='button']")) return;
      enableInvertMode();
    };
    const handleMouseUp = () => disableInvertMode();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("blur", disableInvertMode);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
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
