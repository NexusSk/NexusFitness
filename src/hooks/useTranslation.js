import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export const useTranslation = () => {
  const { language } = useLanguage()
  return translations[language]
}

