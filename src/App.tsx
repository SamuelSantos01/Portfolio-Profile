import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import { Projects } from './pages/Projects';
import { useScrollToAnchor } from './hooks/useScrollToAnchor';

function AppContent() {
  useScrollToAnchor();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <AppContent />
  );
}