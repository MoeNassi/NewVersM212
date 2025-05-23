import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import AboutPage from './components/AboutPage.tsx';
import DomainesPage from './components/DomainesPage.tsx';
import ContactPage from './components/Contact.tsx';
import RefContainer from './components/Galerie.tsx';
import PopUpGalerie from './components/GalerieComp.tsx';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/domaine" element={<DomainesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/realisations" element={<RefContainer />} />
      <Route path="/realisations/list" element={<PopUpGalerie />} />
    </Routes>
  </BrowserRouter>
);