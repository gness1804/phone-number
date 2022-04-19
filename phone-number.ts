const removeInvalidChars = (str: string): string => str
  .replace(/\(/g, '')
  .replace(/\)/g, '')
  .replace(/\s/g, '')
  .replace(/-/g, '')

export function clean(num: string): string {
  return removeInvalidChars(num);
}
