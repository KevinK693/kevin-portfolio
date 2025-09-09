import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Toujours forcer le dark mode au montage du composant
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null; // plus besoin de bouton
};
