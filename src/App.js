import logo from './logo.svg';
import './App.css';
import ClassTables from './Comp/Tables/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import Cart from './Comp/Tables/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={ClassTables} />
      </Router>
     
    
    </div>
  );
}

export default App;
