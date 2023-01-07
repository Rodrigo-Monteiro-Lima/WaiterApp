import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
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
    <>
      <Container>
        < Header/>
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
};

export default Main;
