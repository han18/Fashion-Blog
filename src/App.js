import "./App.css";
import { Container, Navbar } from "../src/styled";
import Article from "./Components/body/Article";
import Header from "./Components/header/Header";
import Nav from "./Components/header/Nav";

function App() {
  return (
    <Container>
      <Header />
      {/* <Navbar> */} <Nav />
      {/* </Navbar> */}
      <Article />
    </Container>
  );
}

export default App;
