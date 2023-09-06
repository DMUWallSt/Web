import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import News from "./routes/news";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WallStreet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/news">Page1</Nav.Link>
            <Nav.Link href="#pricing">Page2</Nav.Link>
            <Nav.Link href="#pricing">Page3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/news" element={<News></News>}></Route>
      </Routes>
    </div>
  );
}

export default App;
