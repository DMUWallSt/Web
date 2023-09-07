import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import News from "./routes/news";
import { useState } from "react";
import MyWordcloud from "./reactwordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function App() {
  const [companyName, setCompanyName] = useState([
    { text: "삼성생명", value: 10, url: "/" },
    { text: "삼성생명2", value: 3, url: "/" },
    { text: "삼성생명3", value: 7, url: "/" },
    { text: "삼성생명4", value: 5, url: "/" },
    { text: "삼성생명5", value: 20, url: "/" },
    { text: "삼성생명6", value: 21, url: "/" },
    { text: "삼성생명7", value: 2, url: "/" },
    { text: "삼성생명8", value: 22, url: "/" },
    { text: "삼성생명9", value: 15, url: "/" },
    { text: "삼성생명10", value: 10, url: "/news" },
  ]);

  const sortedCompanyName = [...companyName].sort((a, b) => {
    return a.score - b.score;
  });

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">WallStreet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/news">Page1</Nav.Link>
            <Nav.Link href="#pricing">Page2</Nav.Link>
            <Nav.Link href="#pricing">Page3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MyWordcloud words={companyName} />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </div>
  );
}

export default App;
