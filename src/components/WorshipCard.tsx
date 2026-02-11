import { Calendar, Radio } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface WorshipCardProps {
  section: 'english' | 'chinese'
  day: string
  time: string
  youtubeUrl: string
  details: string
  detailsZh?: string
}

export default function WorshipCard({ section, day, time, youtubeUrl, details, detailsZh }: WorshipCardProps) {
  const { t } = useLanguage()
  const isEnglish = section === 'english'

  return (
    <div className="card bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-lutheran-navy transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {isEnglish ? (
            <span className="text-3xl">🇬🇧</span>
          ) : (
            <span className="text-3xl">🇨🇳</span>
          )}
          <h3 className="text-2xl font-bold text-lutheran-navy">
            {isEnglish ? 'ENGLISH WORSHIP' : '中文崇拜'}
          </h3>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-3 text-gray-700">
          <Calendar className="w-5 h-5 text-lutheran-gold" />
          <span className="font-semibold">{day}</span>
        </div>
        <div className="text-3xl font-bold text-lutheran-navy">{time}</div>
        <p className="text-gray-600">
          {isEnglish ? details : (detailsZh || details)}
        </p>
      </div>

      <div className="space-y-3">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <Radio className="w-5 h-5" />
          <span>{t('Watch Livestream', '觀看直播')}</span>
        </a>
        <a
          href={isEnglish ? '/english' : '/chinese'}
          className="btn-secondary w-full flex items-center justify-center"
        >
          {t('Learn More', '了解更多')}
        </a>
      </div>
    </div>
  )
}