import './App.css';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
