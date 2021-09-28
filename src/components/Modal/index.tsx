import { Dispatch } from 'react'
import ReactModal from 'react-modal';

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  children: React.ReactNode
}

export const Modal = ({ isOpen, setIsOpen, children }: Props): JSX.Element => {
  
  const handleCloseModal = () => {
    setIsOpen(false)
  }

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={handleCloseModal}
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
};