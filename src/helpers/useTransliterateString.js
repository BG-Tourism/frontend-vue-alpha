import { ref, watch } from 'vue'

function transliterateString(text, locale) {
  const map = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'sht',
    ъ: 'a',
    ь: 'y',
    ю: 'yu',
    я: 'ya',
    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ж: 'Zh',
    З: 'Z',
    И: 'I',
    Й: 'Y',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'Ts',
    Ч: 'Ch',
    Ш: 'Sh',
    Щ: 'Sht',
    Ъ: 'A',
    Ь: 'Y',
    Ю: 'Yu',
    Я: 'Ya',
  }

  if (['bg'].includes(locale)) {
    return text
  }
  else {
    return text
      .split('')
      .map(char => map[char] || char)
      .join('')
  }
}

export function useTransliterateString(initialText, initialLocale) {
  const text = ref(initialText)
  const locale = ref(initialLocale)
  const transliteratedText = ref(transliterateString(initialText, initialLocale))

  watch([text, locale], ([newText, newLocale]) => {
    transliteratedText.value = transliterateString(newText, newLocale)
  })

  return transliteratedText.value
}
