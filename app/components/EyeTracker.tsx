import { useEffect, useRef } from "react";

export default function EyeTracker() {
  const pupil1Ref = useRef<HTMLDivElement>(null);
  const pupil2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 10;
      const y = (clientY / window.innerHeight - 0.5) * 10;
      const transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

      if (pupil1Ref.current) pupil1Ref.current.style.transform = transform;
      if (pupil2Ref.current) pupil2Ref.current.style.transform = transform;
    };

    const handleMouseDown = () => {
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
    <div id="eye-tracker">
      <div className="eye">
        <div className="pupil" ref={pupil1Ref} />
      </div>
      <div className="eye">
        <div className="pupil" ref={pupil2Ref} />
      </div>
    </div>
  );
}
