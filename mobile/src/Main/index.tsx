import { useState } from 'react';
import Button from '../components/Button';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer,
} from './styles';

const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  };
  const handleCancelOrder = () => {
    setSelectedTable('');
  };

  return (
    <>
      <Container>
        < Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && <Button onPress={() => setIsTableModalVisible(true) }>Novo Pedido</Button>}
          {selectedTable && <Cart />}
        </FooterContainer>
      </Footer>
      <TableModal visible={isTableModalVisible} onClose={() => setIsTableModalVisible(false)} onSave={handleSaveTable}/>
    </>
  );
};

export default Main;
