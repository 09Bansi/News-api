
import './App.css';
import NavBar from './Componenet/NavBar';
import News from './Componenet/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<News key="general" pagesize={5} country="us" category="general"/>} />
      <Route exact path="/business" element={<News key="business" pagesize={5} country="us" category="business"/>} />
      <Route exact path="/entertainment" element={<News key="entertainment" pagesize={5} country="us" category="entertainment"/>} />
      <Route exact path="/general" element={<News key="general" pagesize={5} country="us" category="general"/>} />
      <Route exact path="/health" element={<News key="health" pagesize={5} country="us" category="health"/>} />
      <Route exact path="/science" element={<News key="science" pagesize={5} country="us" category="science"/>} />
      <Route exact path="/sports" element={<News key="sports" pagesize={5} country="us" category="sports"/>} />
      <Route exact path="/technology" element={<News key="technology" pagesize={5} country="us" category="technology"/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
