import Footer from './components/footer';
import HomePage from './components/HomePage';

import './css/footer.css'
import './css/HomePage.css'
import './css/AboutPage.css'
import './css/DomainesPage.css'
import './css/responsive.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App() {
  return (
      <div className="PageContainer">
        <HomePage />
        <Footer/>
      </div>
  )
}