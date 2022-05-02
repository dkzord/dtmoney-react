import { FormEvent, useState } from 'react';
import  Modal  from 'react-modal';
import buttonClose from '../../assets/buttonClose.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    console.log(
      title, 
      value, 
      category, 
      type
    );
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={buttonClose} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input type="text" 
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input type="number" 
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit');} }
            isActive={type === 'deposit'}
            actionColor="green"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            actionColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" 
          placeholder="Categória"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}