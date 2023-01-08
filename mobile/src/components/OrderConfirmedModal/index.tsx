import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

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
