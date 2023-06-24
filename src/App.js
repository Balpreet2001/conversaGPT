import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import { Chat } from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" Component={Home} />
        <Route to="/chat" Component={Chat} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
