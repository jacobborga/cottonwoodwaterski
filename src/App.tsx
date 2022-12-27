import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import FrontPage from './views/FrontPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<FrontPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
