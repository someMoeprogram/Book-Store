import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Books from "./pages/Books"
import {books} from "./data";
import Bookinfo from './pages/Bookinfo';

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={ ()=> <Books books={books} /> } />
        <Route path="/books/1" render={() => <Bookinfo books={books} /> } />
        <Footer/> 
      </div>
    </Router>
  );
    
}

export default App;
