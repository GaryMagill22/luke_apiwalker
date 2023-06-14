import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Planet from './pages/Planet';
import People from './pages/People';


function App() {
  return (
    <div className="App">
      <SearchForm />
      {/* <div>
        <p style={{ color: "red" }}>{numberErr}</p>
      </div> */}
      <Routes>
        <Route path="/people/:id" element={<People />}></Route>
        <Route path="/planets/:id" element={<Planet />}></Route>
      </Routes>

    </div>
  );
}

export default App;
