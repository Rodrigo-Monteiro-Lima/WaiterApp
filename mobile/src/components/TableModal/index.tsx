import { Modal } from 'react-native';
import Button from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

const TableModal = () => {
  return (
    <Modal transparent animationType="fade">
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeTe
            />
          </Form>
          <Button>
            Salvar
          </Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};

export default TableModal;
