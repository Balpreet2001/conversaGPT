import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Chat from './pages/Chat'
import About from './pages/About';
import Sources from './pages/Sources'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/sources" element={<Sources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
