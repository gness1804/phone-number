const removeInvalidChars = (str: string): string => str
  .replace(/\(/g, '')
  .replace(/\)/g, '')
  .replace(/\s/g, '')
  .replace(/-/g, '')
  .replace(/\./g, '')
  .replace(/^\+?1(?=\d{10})/g, '')

export function clean(numStr: string): string {
  const sanitizedStr = removeInvalidChars(numStr);
  if (sanitizedStr.match(/[a-zA-Z]/)) {
    throw new Error('Letters not permitted')
  } else if (sanitizedStr.match(/\D/)) {
    throw new Error('Punctuations not permitted')
  }

  if (sanitizedStr.length > 11) {
    throw new Error('More than 11 digits')
  } else if (sanitizedStr.length === 11) {
    if (!sanitizedStr.startsWith('1')) {
      throw new Error('11 digits must start with 1')
    }
  } else if (sanitizedStr.length !== 10) {
    throw new Error('Incorrect number of digits')
  }

  // is ten digits
  const exchangeStartDigit = sanitizedStr[3];
  if (sanitizedStr.startsWith('0')) {
    throw new Error('Area code cannot start with zero')
  } else if (sanitizedStr.startsWith('1')) {
    throw new Error('Area code cannot start with one')
  } else if (exchangeStartDigit === '0') {
    throw new Error('Exchange code cannot start with zero')
  } else if (exchangeStartDigit === '1') {
    throw new Error('Exchange code cannot start with one')
  }

  return sanitizedStr;
}
