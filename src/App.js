import "./App.css";
import { Container } from "../../styled";
import Article from "./Components/body/Article";
import Header from "./Components/header/Header";
import Nav from "./Components/header/Nav";

function App() {
  return (
    <Container>
      <Header />
      <Nav />
      <Article />
    </Container>
  );
}

export default App;
