import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 样式类名合并工具（基于 clsx 与 tailwind-merge）
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
