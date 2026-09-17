import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/pages/Dashboard';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Settings from './components/pages/Settings';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
