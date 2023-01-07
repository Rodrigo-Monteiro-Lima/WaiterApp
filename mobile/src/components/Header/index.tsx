import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, OrderHeader, Table } from './styles';

const Header = () => {
  return (
    <Container>
      <>
        <Text size={14} opacity={0.9}>
          Bem vindo(a) ao
        </Text>
        <Text size={24} weight="700">
          WAITER
          <Text size={24}>APP</Text>
        </Text>
      </>
      <Content>
        <OrderHeader>
          <Text size={24} weight="600">
            Pedido
          </Text>
          <TouchableOpacity>
            <Text weight="600" size={14} color="#d73035">
              cancelar pedido
            </Text>
          </TouchableOpacity>
        </OrderHeader>
        <Table>
          <Text color="#666">Mesa 1</Text>
        </Table>
      </Content>
    </Container>
  );
};

export default Header;
