import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes path="/*">
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/*" element={<h1>404 error</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
