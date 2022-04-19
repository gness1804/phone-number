const removeInvalidChars = (str: string): string => str
  .replace(/\(/g, '')
  .replace(/\)/g, '')
  .replace(/\s/g, '')
  .replace(/-/g, '')
  .replace(/\./g, '')

export function clean(numStr: string): string {
  if (numStr.length !== 10) {
    throw new Error('Incorrect number of digits')
  }
  return removeInvalidChars(numStr);
}
