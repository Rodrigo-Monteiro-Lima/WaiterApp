import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import Button from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Form, Header, Input, ModalBody, Overlay } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const [table, setTable] = useState('');
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={() => {
              onClose();
              setTable('');
            }}>
              <Close color="#666"/>
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />
          </Form>
          <Button onPress={() => onSave(table)} disabled={table.length === 0}>
            Salvar
          </Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};

export default TableModal;
