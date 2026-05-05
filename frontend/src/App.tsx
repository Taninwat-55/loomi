import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Hem from './pages/hem/page';
import Tjanster from './pages/hem/services';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hem />} />
          <Route path="/tjanster" element={<Tjanster />} /><Route path="/portfolj" element={<div>Portfölj</div>} />
          <Route path="/om-oss" element={<div>Om oss</div>} />
          <Route path="/kontakta-oss" element={<div>Kontakt</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;