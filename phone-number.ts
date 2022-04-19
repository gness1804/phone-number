const removeInvalidChars = (str: string): string => str
  .replace(/\(/g, '')
  .replace(/\)/g, '')
  .replace(/\s/g, '')
  .replace(/-/g, '')
  .replace(/\./g, '')
  .replace(/^\+1/g, '')

export function clean(numStr: string): string {
  const sanitizedStr = removeInvalidChars(numStr);
  if (sanitizedStr.length === 11) {
    if (!sanitizedStr.startsWith('1')) {
      throw new Error('11 digits must start with 1')
    }
  } else if (sanitizedStr.length !== 10) {
    throw new Error('Incorrect number of digits')
  }
  return sanitizedStr;
}
