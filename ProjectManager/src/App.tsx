import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/pages/Dashboard';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Settings from './components/pages/Settings';
import Tasks from './components/pages/Tasks';
import Members from './components/pages/Members';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/members" element={<Members />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
