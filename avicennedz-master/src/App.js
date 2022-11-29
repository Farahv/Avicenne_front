import logo from './logo.svg';
import './App.css';

import { useLocation, Routes, Route, Navigate, BrowserRouter , Redirect} from "react-router-dom";

import Medecin from './Layout/Medecin.js'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" 
          element={<Medecin />}
           />
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
