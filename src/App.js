import "./App.css";
import { Container } from "../src/styled";
import Article from "./Components/body/Article";
import Header from "./Components/header/Header";
import Nav from "./Components/header/Nav";
import ArticleTwo from "./Components/body/ArticleTwo";

function App() {
  return (
    <Container>
      <Header />
      <Nav />
      <Article />
      <ArticleTwo />
    </Container>
  );
}

export default App;
