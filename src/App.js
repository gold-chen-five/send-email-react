import logo from './logo.svg';
import './App.css';
import MassageSend from './MassageSend';
import Thanks from './Thanks';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path='/thanks' element={<Thanks/>}/>
              <Route path='/' element={<MassageSend/>}/>
          </Routes>
          
      </div>
    </Router>
    
  );
}

export default App;
