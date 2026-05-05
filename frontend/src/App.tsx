import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Hem from './pages/hem/page';
import Tjanster from './pages/tjanster/page';
import ContactPage from './pages/kontakta-oss/page';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hem />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/portfolj" element={<div>Portfölj</div>} />
          <Route path="/om-oss" element={<div>Om oss</div>} />
          <Route path="/kontakta-oss" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;