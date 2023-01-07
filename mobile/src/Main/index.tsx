import Header from '../components/Header';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer,
} from './styles';

const Main = () => {
  return (
    <Container>
      < Header/>
      <CategoriesContainer></CategoriesContainer>
      <MenuContainer></MenuContainer>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
