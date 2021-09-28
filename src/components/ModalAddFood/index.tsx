import { createRef, Dispatch } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Modal } from '../Modal';
import { Input } from '../Input';
import { FormHandles } from '@unform/core';
import { FoodObject } from '../../@types/types';

import { Form } from './styles';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  handleAddFood: (data: FoodObject) => void;
}

export const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }: Props) => {
  const formRef = createRef<FormHandles>();
  
  const handleSubmit = async (data: FoodObject) => {
    handleAddFood(data);
    setIsOpen(false);
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />
          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />
          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};