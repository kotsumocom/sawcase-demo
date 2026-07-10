import { useEffect, useState } from "preact/hooks";
import { Sun, Moon } from "lucide-preact";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // 初期値: OS 設定 or localStorage
    const stored = localStorage.getItem("sawcase-theme");
    if (stored) {
      setDark(stored === "dark");
      document.documentElement.dataset.theme = stored;
    } else {
      const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sawcase-theme", theme);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "ライトモードに切替" : "ダークモードに切替"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid var(--st-sys-color-outline-variant, #49454e)",
        background: "var(--st-sys-color-surface-container, transparent)",
        color: "var(--st-sys-color-on-surface, currentColor)",
        cursor: "pointer",
        transition: "background 0.15s, color 0.15s",
      }}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
