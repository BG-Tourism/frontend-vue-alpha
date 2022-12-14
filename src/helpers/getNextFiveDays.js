export default function getNextFiveDays(locale) {
    var date = new Date()
    var days = [
        {
            number: date.getDay(),
            long: date.toLocaleDateString(locale).slice(0, 10)
        }
    ]

    for (var i = 0; i < 4; i++) {
        date.setDate(date.getDate() + 1)

        days.push({
            number: date.getDay(),
            long: date.toLocaleDateString(locale).slice(0, 10)
        })
    }

    return days
}
