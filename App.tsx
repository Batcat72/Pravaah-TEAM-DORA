import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AsteroidDetail from './pages/AsteroidDetail';
import AlertsPanel from './pages/AlertsPanel';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="asteroid/:id" element={<AsteroidDetail />} />
          <Route path="alerts" element={<AlertsPanel />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
