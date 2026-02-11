import { Link } from 'react-router-dom'
import { MapPin, Mail, Youtube } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-lutheran-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">MOUNTAINSIDE</h3>
            <p className="text-gray-300 mb-2">{t('Lutheran Church', '信義會蒙恩堂')}</p>
            <p className="text-sm text-gray-400">
              {t(
                'One Church Community • Two Language Sections',
                '一個教會 • 雙語部門'
              )}
            </p>
          </div>

          {/* English Section */}
          <div>
            <h4 className="font-semibold mb-4">{t('English Section', '英文部')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/english" className="hover:text-lutheran-gold transition-colors">Overview</Link></li>
              <li><Link to="/english/sermons" className="hover:text-lutheran-gold transition-colors">Sermons</Link></li>
              <li><Link to="/english/ministries" className="hover:text-lutheran-gold transition-colors">Ministries</Link></li>
              <li className="flex items-center space-x-2">
                <Youtube className="w-4 h-4" />
                <a href="https://www.youtube.com/@mountainsidelutheranchurch2920" target="_blank" rel="noopener noreferrer" className="hover:text-lutheran-gold transition-colors">
                  Livestream
                </a>
              </li>
            </ul>
          </div>

          {/* Chinese Section */}
          <div>
            <h4 className="font-semibold mb-4">{t('Chinese Section', '中文部')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/chinese" className="hover:text-lutheran-gold transition-colors">{t('Overview', '總覽')}</Link></li>
              <li><Link to="/chinese/sermons" className="hover:text-lutheran-gold transition-colors">{t('Sermons', '講道')}</Link></li>
              <li><Link to="/chinese/ministries" className="hover:text-lutheran-gold transition-colors">{t('Ministries', '事工')}</Link></li>
              <li className="flex items-center space-x-2">
                <Youtube className="w-4 h-4" />
                <a href="https://www.youtube.com/@felixtong" target="_blank" rel="noopener noreferrer" className="hover:text-lutheran-gold transition-colors">
                  {t('Livestream', '直播')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('Contact Us', '聯絡我們')}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>24 Panmure Road<br />Mt Wellington<br />Auckland 1060</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@mountainside.co.nz" className="hover:text-lutheran-gold transition-colors">
                  info@mountainside.co.nz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mountainside Lutheran Church (LCANZ). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}