import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fungsi cn (Class Name) menggabungkan class conditionally
 * dan automatically menyelesaikan conflict antar class Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}