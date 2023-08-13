import React from 'react';
import { ModalWrapper, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  testid?: string;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  footer, 
  children,
  testid="modal"
}) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper 
    data-testid={testid}
    $isOpen={isOpen}
    >
      <ModalContent>
        <ModalHeader>
            {title}
            <ModalCloseButton data-testid="close-button" onClick={onClose}>
                <span>&times;</span>
            </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
            {children}
        </ModalBody>
        <ModalFooter>
          {footer}
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
