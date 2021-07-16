import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Internal from "./components/Internar/Internal";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internal/:id/:slug" element={<Internal />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
