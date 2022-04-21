import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Navigation/Routing';


function App() {
  return (
    <div className="App"> 
    <Router>
        <div>
       
        <Routing />
        </div>
        
    </Router>
     
    </div>
  );
}

export default App;
