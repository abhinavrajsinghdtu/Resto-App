import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Home from "./components/Home"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetails from "./components/RestaurantDetails"
import RestaurantList from "./components/RestaurantList"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantUpdate from "./components/RestaurantUpdate"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Resto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/list" element={<RestaurantList />} >
          </Route>
          <Route path="/create" element=
            {<RestaurantCreate />} >
          </Route>
          <Route path="/details" element={<RestaurantDetails />} >
          </Route>
          <Route path="/search" element={<RestaurantSearch />} >
          </Route>
          <Route path="/update" element={<RestaurantUpdate />} >
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
