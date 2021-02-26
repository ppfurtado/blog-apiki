import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Internal from './components/Internar/Internal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internal/:id/:slug" element={<Internal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
