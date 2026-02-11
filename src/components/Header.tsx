import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEnglishOpen, setIsEnglishOpen] = useState(false)
  const [isChineseOpen, setIsChineseOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-lutheran-navy rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <div className="hidden md:block">
              <div className="text-lutheran-navy font-bold text-lg">MOUNTAINSIDE</div>
              <div className="text-gray-600 text-sm">{t('Lutheran Church', '信義會蒙恩堂')}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-lutheran-navy' : 'text-gray-700 hover:text-lutheran-navy'
              }`}
            >
              {t('Home', '主頁')}
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-lutheran-navy' : 'text-gray-700 hover:text-lutheran-navy'
              }`}
            >
              {t('About', '關於')}
            </Link>
            
            {/* English Section Dropdown */}
            <div className="relative" onMouseEnter={() => setIsEnglishOpen(true)} onMouseLeave={() => setIsEnglishOpen(false)}>
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-lutheran-navy transition-colors">
                <span>{t('English Section', '英文部')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isEnglishOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <Link to="/english" className="block px-4 py-2 hover:bg-gray-50">Overview</Link>
                  <Link to="/english/sermons" className="block px-4 py-2 hover:bg-gray-50">Sermons</Link>
                  <Link to="/english/ministries" className="block px-4 py-2 hover:bg-gray-50">Ministries</Link>
                </div>
              )}
            </div>

            {/* Chinese Section Dropdown */}
            <div className="relative" onMouseEnter={() => setIsChineseOpen(true)} onMouseLeave={() => setIsChineseOpen(false)}>
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-lutheran-navy transition-colors">
                <span>{t('Chinese Section', '中文部')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isChineseOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <Link to="/chinese" className="block px-4 py-2 hover:bg-gray-50">{t('Overview', '總覽')}</Link>
                  <Link to="/chinese/sermons" className="block px-4 py-2 hover:bg-gray-50">{t('Sermons', '講道')}</Link>
                  <Link to="/chinese/ministries" className="block px-4 py-2 hover:bg-gray-50">{t('Ministries', '事工')}</Link>
                </div>
              )}
            </div>

            <Link
              to="/combined"
              className={`font-medium transition-colors ${
                isActive('/combined') ? 'text-lutheran-navy' : 'text-gray-700 hover:text-lutheran-navy'
              }`}
            >
              {t('Combined Ministry', '聯合事工')}
            </Link>
            <Link
              to="/visit"
              className={`font-medium transition-colors ${
                isActive('/visit') ? 'text-lutheran-navy' : 'text-gray-700 hover:text-lutheran-navy'
              }`}
            >
              {t('Visit', '參訪')}
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-lutheran-navy' : 'text-gray-700 hover:text-lutheran-navy'
              }`}
            >
              {t('Contact', '聯絡')}
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-lutheran-navy"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <Link to="/" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('Home', '主頁')}
            </Link>
            <Link to="/about" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('About', '關於')}
            </Link>
            <Link to="/english" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('English Section', '英文部')}
            </Link>
            <Link to="/chinese" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('Chinese Section', '中文部')}
            </Link>
            <Link to="/combined" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('Combined Ministry', '聯合事工')}
            </Link>
            <Link to="/visit" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('Visit', '參訪')}
            </Link>
            <Link to="/contact" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('Contact', '聯絡')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}