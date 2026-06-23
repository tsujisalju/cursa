import { useEffect, useState } from "react";

export default function ASCIISpinner() {
  const frames = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
  const [currentFrame, setCurrentFrame] = useState<string>(frames[0]);
  useEffect(() => {
    setTimeout(() => {
      setCurrentFrame(
        frames[(frames.indexOf(currentFrame) + 1) % frames.length],
      );
    }, 100);
  });
  return <span className="font-mono">{currentFrame}</span>;
}
