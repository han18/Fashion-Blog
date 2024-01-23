import Header from "../header/Header";
import { Container } from "../../styled";
import Article from "../body/Article";

function HomePage() {
  return (
    <Container>
      <Header />
      <Article />
    </Container>
  );
}

export default HomePage;
