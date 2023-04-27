import './App.css';
import Dashboard from './Containers/Dashboard';
import { Routes, Route } from "react-router-dom"
import NotFoundPage from './Containers/NotFoundPage';
import RenderHooks from './Containers/RenderHooks';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="/hooks/:hookName" element={  <RenderHooks/> } />
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
    </div>
  );
}

export default App;
