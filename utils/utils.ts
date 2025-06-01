import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function sortRecordKeysDesc<T>(
  record: Record<string, T>
): [string, T][] {
  return Object.entries(record).sort(([a], [b]) => Number(b) - Number(a))
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
