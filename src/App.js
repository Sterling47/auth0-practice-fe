import './App.css';
import { Routes, Route} from 'react-router-dom';
import './LoginPage/LoginPage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/landingPage' element={<LandingPage />} />
      <Route index element={<LoginPage />} />
    </Routes>
  
  );
}

export default App;
