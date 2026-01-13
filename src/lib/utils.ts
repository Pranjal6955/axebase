import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose multiple class values into a single Tailwind-compatible class string, deduplicating and resolving conflicting utilities.
 *
 * @param inputs - One or more class values (strings, arrays, or objects) to compose
 * @returns The merged class string with duplicate and conflicting Tailwind utilities resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}