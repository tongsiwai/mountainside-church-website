import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-lutheran-navy text-white'
            : 'text-gray-700 hover:bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'zh'
            ? 'bg-lutheran-navy text-white'
            : 'text-gray-700 hover:bg-gray-200'
        }`}
      >
        中文
      </button>
    </div>
  )
}