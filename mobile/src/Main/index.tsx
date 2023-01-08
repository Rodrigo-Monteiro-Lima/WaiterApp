import { useState } from 'react';
import Button from '../components/Button';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  };
  const handleCancelOrder = () => {
    setSelectedTable('');
  };
  const handleAddToCart = (product: Product) => {
    if (!selectedTable) setIsTableModalVisible(true);
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );
      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }
      const newCartItem = [...prevState];
      const item = newCartItem[itemIndex];
      newCartItem[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };
      return newCartItem;
    });
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
          <Menu onAddToCart={handleAddToCart}/>
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && <Button onPress={() => setIsTableModalVisible(true) }>Novo Pedido</Button>}
          {selectedTable && <Cart cartItems={cartItems} />}
        </FooterContainer>
      </Footer>
      <TableModal visible={isTableModalVisible} onClose={() => setIsTableModalVisible(false)} onSave={handleSaveTable}/>
    </>
  );
};

export default Main;
