import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './components/login/login';
import Main from './components/main/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
