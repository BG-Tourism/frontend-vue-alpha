import { useFinderStore } from '@/stores/Finder'

export default function addItemsByQuery(parameters) {
  const finder = useFinderStore()
  const object = {}

  for (const key in parameters) {
    object[key] = String(parameters[key]).split(',').map((value) => {
      if (!isNaN(value))
        return Number(value)

      return value
    })

    finder.manageItem(key, object[key])
  }

  return object
}
