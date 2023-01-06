import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

const Orders = () => {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={[{table: '1', status: 'WAITING', _id: '123', products: []}]}
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
