// Helper function to truncate long strings
export const truncateString = (str = '', maxLength = 50) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...'
  }
  return str
}
