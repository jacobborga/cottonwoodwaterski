import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import FrontPage from './views/FrontPage';
import Login from './views/Login';
import MembersOnly from './components/MembersOnly';
import Discussions from './views/Discussions';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<FrontPage />} />
            <Route path='/login' element={<Login />} />
            <Route element={<MembersOnly />}>
              <Route path='/discussions' element={<Discussions />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
