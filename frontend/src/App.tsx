import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Hem from './pages/hem/page';
import Tjanster from './pages/tjanster/page';
import ContactPage from './pages/kontakta-oss/page';
import AboutPage from './pages/om-oss/page';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hem />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/portfolj" element={<div>Portfölj</div>} />
          <Route path="/om-oss" element={<AboutPage />} />
          <Route path="/kontakta-oss" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;