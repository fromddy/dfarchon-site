import { useEffect, useRef } from "react";

export default function EyeTracker() {
  const trackerRef = useRef<HTMLDivElement>(null);
  const pupil1Ref = useRef<HTMLDivElement>(null);
  const pupil2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      document.body.style.filter = "invert(1)";
    };
    const handleMouseUp = () => {
      document.body.style.filter = "none";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
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
