 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import AddEvents from './Components/AddEvents/AddEvents';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
       <Router>
      <div>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">VOLUNTEER_NETWORK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addEvent">AddEvents</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addEvent">
           <AddEvents/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
