import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Internal from './components/Internar/Internal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internal" element={<Internal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
