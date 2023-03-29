const fileSize = (fileSize) => {
  let size = Math.abs(fileSize)

  if (Number.isNaN(size))
    return 'Invalid file size'

  if (size === 0)
    return '0 bytes'

  const units = ['bytes', 'kB', 'MB', 'GB', 'TB']
  let quotient = Math.floor(Math.log10(size) / 3)
  quotient = quotient < units.length ? quotient : units.length - 1
  size /= 1000 ** quotient

  return `${+size.toFixed(2)} ${units[quotient]}`
}

export default fileSize
