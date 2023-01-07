
import { useContext } from 'react';
import './assets/css/style.css'
import Header from "./layouts/header";
import {ThemeContext} from './contexts/theme-context';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/about';
import Contact from './pages/contact';
import Home from './pages';
const darkTheme = "dark";
function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === darkTheme ? "light": "dark" }>
        <Header  />
        <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='home' element={<Home/>} />
            <Route path='about' element={<AboutPage/>} />
            <Route path='contact' element={<Contact/>} />
        </Routes>
        
    </div>
  );
}

export default App;
