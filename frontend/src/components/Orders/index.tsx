import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

const Orders = () => {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={[]}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto !"
        orders={[]}
      />
    </Container>
  );
};

export default Orders;
