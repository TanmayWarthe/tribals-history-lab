import { useEffect, useState } from "react";

export default function TextLoop() {
  const words = [
    { text: "Welcome to Tribal's History", color: "#ff595e" },
    { text: "Discover Ancient Cultures", color: "#ffca3a" },
    { text: "Explore Indigenous Heritage", color: "#8ac926" },
    { text: "Uncover Untold Stories", color: "#1982c4" }
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [pause, setPause] = useState(false);

  // Typing & deleting logic
  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < words[index].text.length) {
        setSubIndex(subIndex + 1);
      } 
      else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } 
      else if (!deleting && subIndex === words[index].text.length) {
        setPause(true);
        setTimeout(() => {
          setDeleting(true);
          setPause(false);
        }, 1000); // stop time
      } 
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, pause]);

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span
      style={{
        fontSize: "36px",
        fontWeight: "bold",
        color: words[index].color,
      }}
    >
      {words[index].text.substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, color: "#fff" }}>|</span>
    </span>
  );
}
