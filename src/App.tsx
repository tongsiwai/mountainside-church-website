import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Visit from './pages/Visit'
import Contact from './pages/Contact'
import EnglishLanding from './pages/English/EnglishLanding'
import EnglishSermons from './pages/English/EnglishSermons'
import EnglishMinistries from './pages/English/EnglishMinistries'
import ChineseLanding from './pages/Chinese/ChineseLanding'
import ChineseSermons from './pages/Chinese/ChineseSermons'
import ChineseMinistries from './pages/Chinese/ChineseMinistries'
import CombinedMinistry from './pages/Combined/CombinedMinistry'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/english" element={<EnglishLanding />} />
          <Route path="/english/sermons" element={<EnglishSermons />} />
          <Route path="/english/ministries" element={<EnglishMinistries />} />
          <Route path="/chinese" element={<ChineseLanding />} />
          <Route path="/chinese/sermons" element={<ChineseSermons />} />
          <Route path="/chinese/ministries" element={<ChineseMinistries />} />
          <Route path="/combined" element={<CombinedMinistry />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App