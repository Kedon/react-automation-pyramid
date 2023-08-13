/*
  Modal Component
  This component defines a customizable modal dialog for React applications. It encapsulates a modal with a header, body, footer, and close functionality.

  Props:
  - isOpen: Determines whether the modal is visible.
  - onClose: Callback function invoked when the modal is closed.
  - title: Title or heading of the modal.
  - children: Content placed within the modal body.
  - footer: Content placed within the modal footer.
  - testid: Test ID used for targeting in tests.

  Example Usage:
  <Modal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    title="Edit Profile"
    footer={<Button onClick={saveChanges}>Save</Button>}
  >
    <p>Modal body content goes here.</p>
  </Modal>
  */

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
