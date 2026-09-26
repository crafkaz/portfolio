import { useSyncExternalStore } from "react";
import { THEME_DARK, THEME_LIGHT } from "../constants/theme";

export type ColorScheme = typeof THEME_LIGHT | typeof THEME_DARK;

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

export const colorSchemeScript = `(function(){try{var s=localStorage.getItem("${STORAGE_KEY}");var saved=s==="${THEME_DARK}"||s==="${THEME_LIGHT}"?s:null;var r=document.documentElement;r.classList.add(saved||(matchMedia("${DARK_QUERY}").matches?"${THEME_DARK}":"${THEME_LIGHT}"));if(saved)r.style.colorScheme=saved;}catch(e){}})();`;

const listeners = new Set<() => void>();
let unsavedChoice: ColorScheme | null = null;

function savedScheme(): ColorScheme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === THEME_DARK || saved === THEME_LIGHT) return saved;
  } catch {
    return unsavedChoice;
  }
  return unsavedChoice;
}

function currentScheme(): ColorScheme {
  const saved = savedScheme();
  if (saved) return saved;
  return window.matchMedia(DARK_QUERY).matches ? THEME_DARK : THEME_LIGHT;
}

function syncRoot() {
  const root = document.documentElement;
  root.classList.remove(THEME_LIGHT, THEME_DARK);
  root.classList.add(currentScheme());
  root.style.colorScheme = savedScheme() ?? "";
}

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  syncRoot();

  const media = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    syncRoot();
    notify();
  };
  media.addEventListener("change", onSystemChange);

  return () => {
    listeners.delete(onChange);
    media.removeEventListener("change", onSystemChange);
  };
}

export function setColorScheme(scheme: ColorScheme) {
  try {
    localStorage.setItem(STORAGE_KEY, scheme);
  } catch {
    unsavedChoice = scheme;
  }
  syncRoot();
  notify();
}

export function useColorScheme(): ColorScheme | null {
  return useSyncExternalStore(subscribe, currentScheme, () => null);
}
