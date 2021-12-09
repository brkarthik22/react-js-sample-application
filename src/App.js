import './App.css';
import BookComponent from './book-component';
import CountersComponent from './counters-component';
import HocComponent from './hoc-component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        {
          <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/hoc">HOC</Link>
          </li>
        </ul>
        }
        <Switch>
        <Route exact path='/books' component={BookComponent} /> 
        <Route exact path='/hooks' component={CountersComponent} />
        <Route exact path='/hoc'><HocComponent name="Higher-Order Components (HOC)" /></Route>
          <Route path="/">
            <BookComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

