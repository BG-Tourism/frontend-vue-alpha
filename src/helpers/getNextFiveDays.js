export default function getNextFiveDays(locale) {
  const date = new Date()
  const days = [
    {
      number: date.getDay(),
      long: date.toLocaleDateString(locale).slice(0, 10),
    },
  ]

  for (let i = 0; i < 4; i++) {
    date.setDate(date.getDate() + 1)

    days.push({
      number: date.getDay(),
      long: date.toLocaleDateString(locale).slice(0, 10),
    })
  }

  return days
}
