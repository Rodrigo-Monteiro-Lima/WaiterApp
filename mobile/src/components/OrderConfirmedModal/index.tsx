import { Modal } from 'react-native';

interface OrderConfirmedModalProps {
  visible: boolean;
}

const OrderConfirmedModal = ({ visible }: OrderConfirmedModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">

    </Modal>
  );
};

export default OrderConfirmedModal;
