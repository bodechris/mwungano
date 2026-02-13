const KEY = "mwungano:lastIntroAt";
const DAY_MS = 7 *24 * 60 * 60 * 1000; // 7 days
// const DAY_MS = 60 * 1000;

export function shouldPlayIntro(now = Date.now()): boolean {
  if (typeof window === "undefined") return false;

  const raw = window.localStorage.getItem(KEY);
  const last = raw ? Number(raw) : 0;

  if (!Number.isFinite(last) || last <= 0) return true;
  return now - last > DAY_MS;
}

export function markIntroPlayed(now = Date.now()) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, String(now));
}