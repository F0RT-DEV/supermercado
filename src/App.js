// importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importação do estilo css
import './App.css';

// importação das paginas
import Login from './pages/Login';
import Home from './pages/Home';

// importação de componentes
import Navbarra from './components/Navbarra';

// importação do gerenciador de rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarra />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
